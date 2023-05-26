import {TaskRepository} from "./TaskRepository";
import {ITaskGateway} from "../gateway/ITaskGateway";
import {Mock, Times} from "moq.ts";
import {TaskListViewModel} from "../viewModels/TaskListViewModel";
import {Task} from "../domain/Task";
import {TaskItemsView} from "../domain/TaskItemsView";

describe("Task Repository", () => {
    let taskRepository: TaskRepository;
    let taskGateway: Mock<ITaskGateway>;
    let taskListViewModel: TaskListViewModel[];
    
    beforeEach(() => {
        taskGateway = new Mock<ITaskGateway>();
        taskRepository = new TaskRepository(taskGateway.object());
        taskListViewModel = [
            {
                id: 1,
                name: "name",
                description: "description"
            }
        ]
    });
    
    it("Calling create tasks, it calls gateway", () => {
        //Arrange
        taskGateway.setup(x => x.GetAllTasks())
            .returns(Promise.resolve(taskListViewModel));
        
        //Act
        taskRepository.GetAllTasks();
        
        //Assert
        taskGateway.verify(x => x.GetAllTasks(), Times.Once());
    });
    it('Calling CreateTasks, creates tasks from view model', async () => {
        //Arrange
        taskGateway.setup(x => x.GetAllTasks())
            .returns(Promise.resolve(taskListViewModel));
        
        //Act
        const result = await taskRepository.GetAllTasks();
        
        //Assert
        expect(result.tasks).toHaveLength(1);
        expect(result.tasks).toBeInstanceOf(Array<Task>);
        expect(result).toBeInstanceOf(TaskItemsView);
    });
});