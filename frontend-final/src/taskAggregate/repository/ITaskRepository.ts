import {TaskItemsView} from "../domain/TaskItemsView";
import {TaskCard} from "../domain/TaskCard";

export interface ITaskRepository {
    getAllTasks: () => Promise<TaskItemsView>;
    addTask: (vm: TaskCard) => Promise<number>;
    deleteTask: (taskId: number) => Promise<void>;
}