import {TaskRepository} from "./TaskRepository";
import {ITaskGateway} from "../gateway/ITaskGateway";
import {It, Mock, Times} from "moq.ts";
import {TaskListViewModel} from "../viewModels/TaskListViewModel";
import {Task} from "../domain/Task";
import {TaskItemsView} from "../domain/TaskItemsView";
import {TaskCreateViewModel} from "../viewModels/TaskCreateViewModel";
import {TaskToViewModelMapper} from "../utils/TaskToViewModelMapper";
import {TaskDeleteViewModel} from "../viewModels/TaskDeleteViewModel";

describe("Task Repository", () => {
    let taskRepository: TaskRepository;
    let taskGateway: Mock<ITaskGateway>;
    let taskListViewModel: TaskListViewModel[];
    let task: Task;
    let taskCreateViewModel: TaskCreateViewModel;
    
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
        task = new Task(2, "name 2", "description 2");
    });
    
    it("Calling GetAllTasks, it calls gateway", () => {
        //Arrange
        taskGateway.setup(x => x.GetAllTasks())
            .returns(Promise.resolve(taskListViewModel));
        
        //Act
        taskRepository.GetAllTasks();
        
        //Assert
        taskGateway.verify(x => x.GetAllTasks(), Times.Once());
    });
    it('Calling GetAllTasks, returns tasks from view model', async () => {
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
    it("Calling AddTask calls right gateway method", async() => {
        //Arrange
        taskGateway.setup(x => x.AddTask(It.IsAny<TaskCreateViewModel>()))
            .returns(Promise.resolve());
        
        //Act
        await taskRepository.AddTask(task);
        
        taskGateway.verify(x => x.AddTask(It.IsAny<TaskCreateViewModel>()), Times.Once());
    });
    it("Calling DeleteTask calls the right gateway method", async () => {
        //Arrange
        taskGateway.setup(x => x.DeleteTask(It.IsAny<TaskDeleteViewModel>()))
            .returns(Promise.resolve());
        
        await taskRepository.DeleteTask(task);
        
        taskGateway.verify(x => x.DeleteTask(It.IsAny<TaskDeleteViewModel>()), Times.Once());
    })
});