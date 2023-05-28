import {TaskListViewModel} from "../viewModels/TaskListViewModel";
import {TaskCreateViewModel} from "../viewModels/TaskCreateViewModel";
import {TaskDeleteViewModel} from "../viewModels/TaskDeleteViewModel";

export interface ITaskGateway {
    GetAllTasks: () => Promise<TaskListViewModel[]>;
    AddTask: (taskCreateVm: TaskCreateViewModel) => Promise<void>;
    DeleteTask: (taskDeleteViewModel: TaskDeleteViewModel) => Promise<void>;
}