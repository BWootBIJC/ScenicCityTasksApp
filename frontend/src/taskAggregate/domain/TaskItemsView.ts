import {Task} from "./Task";

export class TaskItemsView {
    tasks: Task[];
    constructor(taskList: Task[]) {
        this.tasks = taskList;
    }
    
    public AddTask(task: Task): TaskItemsView {
        if(task.title === "") {
            throw new Error("Please provide a name.");
        }
        
        if (task.description === "") {
            throw new Error("Please provide a description.");
        }
        
        this.tasks.unshift(task);
        return new TaskItemsView(this.tasks);
    }
    
    public RemoveTask(task: Task): TaskItemsView {
        const findIndex = this.tasks.findIndex(x => {
            return x.id === task.id;
        });
        
        if (findIndex === -1) {
            throw new Error(`Unable to find task with ID ${task.id}`);
        }
        
        this.tasks.splice(findIndex, 1);
        return new TaskItemsView(this.tasks);
    }
}