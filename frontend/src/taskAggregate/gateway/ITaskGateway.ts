﻿import {TaskListViewModel} from "../viewModels/TaskListViewModel";
import {TaskCreateViewModel} from "../viewModels/TaskCreateViewModel";

export interface ITaskGateway {
    GetAllTasks: () => Promise<TaskListViewModel[]>;
    AddTask: (taskCreateVm: TaskCreateViewModel) => Promise<void>;
}