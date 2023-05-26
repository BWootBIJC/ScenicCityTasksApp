import {ITaskRepository} from "./ITaskRepository";
import {ITaskGateway} from "../gateway/ITaskGateway";
import {Task} from "../domain/Task";
import {TaskItemsView} from "../domain/TaskItemsView";

export class TaskRepository implements ITaskRepository {
    private readonly taskGateway: ITaskGateway;
    
    constructor(taskGateway: ITaskGateway) {
        this.taskGateway = taskGateway;        
    }

    public async GetAllTasks() {
        const result = await this.taskGateway.GetAllTasks();
        const tasks: Task[] = result.map(x => new Task(x.id, x.name, x.description));
        return new TaskItemsView(tasks);
    }
}