import {Task} from "../domain/Task.ts";

export interface ITaskRepository {
    CreateTasks: () => Task[];
}