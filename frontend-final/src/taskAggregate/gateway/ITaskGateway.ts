import {TaskListViewModel} from "../viewModels/TaskListViewModel";
import {TaskCreateViewModel} from "../viewModels/TaskCreateViewModel";

export interface ITaskGateway {
    getAllTasks: () => Promise<TaskListViewModel[]>;
    addTask: (taskCreateVm: TaskCreateViewModel) => Promise<number>;
    deleteTask: (taskId: number) => Promise<void>;
}