import {TaskListViewModel} from "../viewModels/TaskListViewModel.ts";

export interface ITaskGateway {
    GetAllTasks: () => Promise<TaskListViewModel[]>;
}