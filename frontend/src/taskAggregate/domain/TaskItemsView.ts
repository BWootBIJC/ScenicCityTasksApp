import {Task} from "./Task";

export class TaskItemsView {
    tasks: Task[];
    constructor(taskList: Task[]) {
        this.tasks = taskList;
    }
    
    public AddTask(task: Task): TaskItemsView {
        this.tasks.push(task);
        return new TaskItemsView(this.tasks);
    }
}