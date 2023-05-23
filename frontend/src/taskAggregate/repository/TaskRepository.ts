import {ITaskRepository} from "./ITaskRepository";
import {ITaskGateway} from "../gateway/ITaskGateway";
import {Task} from "../domain/Task";
import {TaskItems} from "../domain/TaskItems";

export class TaskRepository implements ITaskRepository {
    private readonly taskGateway: ITaskGateway;
    
    constructor(taskGateway: ITaskGateway) {
        this.taskGateway = taskGateway;        
    }

    public async CreateTasks() {
        const result = await this.taskGateway.GetAllTasks();
        const tasks: Task[] = result.map(x => new Task(x.id, x.title, x.description));
        return new TaskItems(tasks);
    }
}