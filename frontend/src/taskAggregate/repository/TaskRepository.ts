import {ITaskRepository} from "./ITaskRepository";
import {ITaskGateway} from "../gateway/ITaskGateway";
import {Task} from "../domain/Task";
import {TaskItemsView} from "../domain/TaskItemsView";
import {TaskCreateViewModel} from "../viewModels/TaskCreateViewModel";
import {TaskDeleteViewModel} from "../viewModels/TaskDeleteViewModel";
import {TaskToViewModelMapper} from "../utils/TaskToViewModelMapper";

export class TaskRepository implements ITaskRepository {
    private readonly taskGateway: ITaskGateway;
    
    constructor(taskGateway: ITaskGateway) {
        this.taskGateway = taskGateway;        
    }

    public async GetAllTasks() {
        const result = await this.taskGateway.GetAllTasks();
        const tasks: Task[] = result.map(x => new Task(x.id, x.title, x.description));
        return new TaskItemsView(tasks);
    }
    
    public async AddTask(task: Task) {
        const vm = TaskToViewModelMapper.MapTaskToTaskCreateViewModel(task);
        return await this.taskGateway.AddTask(vm);
    }
    
    public async DeleteTask(task: Task) {
        const vm = TaskToViewModelMapper.MapTaskToTaskDeleteViewModel(task);
        return await this.taskGateway.DeleteTask(vm);
    }
}