import {ITaskGateway} from "../gateway/ITaskGateway.ts";
import {TaskItems} from "../domain/TaskItems.ts";
import {Task} from "../domain/Task.ts";

export class TaskRepository {
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