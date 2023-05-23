import {Task} from "./Task";

export class TaskItems {
    tasks: Task[];
    constructor(taskList: Task[]) {
        this.tasks = taskList;
    }
    
    public AddTask(task: Task): TaskItems {
        this.tasks.push(task);
        return new TaskItems(this.tasks);
    }
}