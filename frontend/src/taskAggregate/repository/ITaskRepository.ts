import {TaskItemsView} from "../domain/TaskItemsView";
import {Task} from "../domain/Task";

export interface ITaskRepository {
    GetAllTasks: () => Promise<TaskItemsView>;
    AddTask: (vm: Task) => Promise<number>;
    DeleteTask: (taskId: number) => Promise<void>;
}