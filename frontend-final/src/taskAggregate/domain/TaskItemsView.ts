import {TaskCard} from "./TaskCard";

export class TaskItemsView {
    public readonly tasks: TaskCard[];
    constructor(taskList: TaskCard[]) {
        this.tasks = taskList;
    }
}