import {Task} from "./Task.ts";

export class TaskItems {
    tasks: Task[];
    constructor(taskList: Task[]) {
        this.tasks = taskList;
    }
    
    
}