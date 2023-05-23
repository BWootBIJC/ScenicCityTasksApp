import {TaskItems} from "../domain/TaskItems";

export interface ITaskRepository {
    CreateTasks: () => Promise<TaskItems>;
}