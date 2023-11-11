import {TaskItemsView} from "../domain/TaskItemsView";
import {TaskCard} from "../domain/TaskCard";

export interface ITaskService {
    getAllTasks(): Promise<TaskItemsView>;
    addTask(taskCard: TaskCard): Promise<TaskItemsView>;
    deleteTask(taskId: number): Promise<TaskItemsView>;
}