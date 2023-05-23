import {TaskListViewModel} from "../viewModels/TaskListViewModel";

export interface ITaskGateway {
    GetAllTasks: () => Promise<TaskListViewModel[]>;
}