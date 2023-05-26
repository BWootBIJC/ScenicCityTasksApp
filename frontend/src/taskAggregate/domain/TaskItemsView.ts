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
    
    public RemoveTask(task: Task): TaskItemsView {
        const findIndex = this.tasks.findIndex(x => {
            return x.id === task.id &&
                x.name === task.name &&
                x.description === task.description
        });
        
        if (!findIndex) {
            throw new Error(`Unable to find task with ID ${task.id}`);
        }
        
        this.tasks.splice(findIndex, 1);
        return new TaskItemsView(this.tasks);
    }
}