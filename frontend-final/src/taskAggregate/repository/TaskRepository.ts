import {ITaskRepository} from "./ITaskRepository";
import {ITaskGateway} from "../gateway/ITaskGateway";
import {TaskCard} from "../domain/TaskCard";
import {TaskItemsView} from "../domain/TaskItemsView";
import {TaskToViewModelMapper} from "../utils/TaskToViewModelMapper";

export class TaskRepository implements ITaskRepository {
    private readonly taskGateway: ITaskGateway;
    
    constructor(taskGateway: ITaskGateway) {
        this.taskGateway = taskGateway;        
    }

    public async getAllTasks() {
        const result = await this.taskGateway.getAllTasks();
        const tasks: TaskCard[] = result.map(x => new TaskCard(x.id, x.title, x.description));
        return new TaskItemsView(tasks);
    }
    
    public async addTask(task: TaskCard): Promise<number> {
        const vm = TaskToViewModelMapper.MapTaskToTaskCreateViewModel(task);
        return await this.taskGateway.addTask(vm);
    }
    
    public async deleteTask(taskId: number) {
        return await this.taskGateway.deleteTask(taskId);
    }
}