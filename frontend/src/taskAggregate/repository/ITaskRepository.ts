import {TaskItems} from "../domain/TaskItems";

export interface ITaskRepository {
    GetAllTasks: () => Promise<TaskItems>;
}