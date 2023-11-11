import {TaskRepository} from "./TaskRepository";
import {ITaskGateway} from "../gateway/ITaskGateway";
import {It, Mock, Times} from "moq.ts";
import {TaskListViewModel} from "../viewModels/TaskListViewModel";
import {TaskCard} from "../domain/TaskCard";
import {TaskItemsView} from "../domain/TaskItemsView";
import {TaskCreateViewModel} from "../viewModels/TaskCreateViewModel";

describe("Task Repository", () => {
    let taskRepository: TaskRepository;
    let taskGateway: Mock<ITaskGateway>;
    let taskListViewModel: TaskListViewModel[];
    let task: TaskCard;
    
    beforeEach(() => {
        taskGateway = new Mock<ITaskGateway>();
        taskRepository = new TaskRepository(taskGateway.object());
        taskListViewModel = [
            {
                id: 1,
                title: "name",
                description: "description"
            }
        ];
        task = new TaskCard(2, "name 2", "description 2");
    });
    
    it("Calling GetAllTasks, it calls gateway", () => {
        //Arrange
        taskGateway.setup(x => x.getAllTasks())
            .returns(Promise.resolve(taskListViewModel));
        
        //Act
        taskRepository.getAllTasks();
        
        //Assert
        taskGateway.verify(x => x.getAllTasks(), Times.Once());
    });
    it('Calling GetAllTasks, returns tasks from view model', async () => {
        //Arrange
        taskGateway.setup(x => x.getAllTasks())
            .returns(Promise.resolve(taskListViewModel));
        
        //Act
        const result = await taskRepository.getAllTasks();
        
        //Assert
        expect(result.tasks).toHaveLength(1);
        expect(result.tasks).toBeInstanceOf(Array<TaskCard>);
        expect(result).toBeInstanceOf(TaskItemsView);
    });
    it("Calling AddTask calls right gateway method", async() => {
        //Arrange
        taskGateway.setup(x => x.addTask(It.IsAny<TaskCreateViewModel>()))
            .returns(Promise.resolve(1));
        
        //Act
        await taskRepository.addTask(task);
        
        taskGateway.verify(x => x.addTask(It.IsAny<TaskCreateViewModel>()), Times.Once());
    });
    it("Calling DeleteTask calls the right gateway method", async () => {
        //Arrange
        taskGateway.setup(x => x.deleteTask(It.IsAny<number>()))
            .returns(Promise.resolve());
        
        await taskRepository.deleteTask(task.id);
        
        taskGateway.verify(x => x.deleteTask(It.IsAny<number>()), Times.Once());
    })
});