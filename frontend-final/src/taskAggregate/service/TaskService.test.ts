import {TaskService} from "./TaskService";
import {ITaskRepository} from "../repository/ITaskRepository";
import {It, Mock, Times} from "moq.ts";
import {TaskItemsView} from "../domain/TaskItemsView";
import {TaskCard} from "../domain/TaskCard";

describe("TaskService.ts", () => {
    let taskService: TaskService;
    let taskRepository: Mock<ITaskRepository>;
    
    beforeEach(() => {
        taskRepository = new Mock<ITaskRepository>();
        taskService = new TaskService(taskRepository.object());
        taskRepository.setup(x => x.getAllTasks())
            .returns(Promise.resolve(It.IsAny<TaskItemsView>()));
    });
    
    it("add task orchestrates adding to repository and then re-fetching of new data to repository", async () => {
        taskRepository.setup(x => x.addTask(It.IsAny<TaskCard>()))
            .returns(Promise.resolve(It.IsAny<TaskItemsView>()));
        await taskService.addTask(It.IsAny<TaskCard>());
        taskRepository.verify(x => x.addTask(It.IsAny<TaskCard>()), Times.Once());
        taskRepository.verify(x => x.getAllTasks(), Times.Once());
    });
    
    it("get all tasks calls repository to fetch all tasks", async () => {
        taskRepository.setup(x => x.getAllTasks())
            .returns(Promise.resolve(It.IsAny<TaskItemsView>()));
        await taskService.getAllTasks();
        taskRepository.verify(x => x.getAllTasks(), Times.Once());
    });
    
    it("remove task orchestrates removing task to repository and re-fetches task list", async () => {
        taskRepository.setup(x => x.deleteTask(It.IsAny<number>()))
            .returns(Promise.resolve(It.IsAny<TaskItemsView>()));
        await taskService.deleteTask(It.IsAny<number>());
        taskRepository.verify(x => x.deleteTask(It.IsAny<number>()), Times.Once());
        taskRepository.verify(x => x.getAllTasks(), Times.Once());
    });
});