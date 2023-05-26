import {TaskItemsView} from "../domain/TaskItemsView";

export interface ITaskRepository {
    GetAllTasks: () => Promise<TaskItemsView>;
}