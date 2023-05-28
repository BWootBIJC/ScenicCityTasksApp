import {IAPIGateway} from "../../apiGateway/IAPIGateway";
import {ITaskGateway} from "./ITaskGateway";
import {TaskListViewModel} from "../viewModels/TaskListViewModel";
import {TaskCreateViewModel} from "../viewModels/TaskCreateViewModel";
import {TaskDeleteViewModel} from "../viewModels/TaskDeleteViewModel";


export class TaskGateway implements ITaskGateway {
    private readonly _apiGateway: IAPIGateway;
    private readonly basePath: string = "api/task"
    
    constructor(apiGateway: IAPIGateway) {
        this._apiGateway = apiGateway;
    };
    
    public async GetAllTasks(): Promise<TaskListViewModel[]> {
        return await this._apiGateway.Get(`${this.basePath}/list`);
    };
    
    public async AddTask(taskCreateVm: TaskCreateViewModel): Promise<void> {
        return await this._apiGateway.Post(`${this.basePath}/`, taskCreateVm);
    }
    
    public async DeleteTask(taskDeleteVm: TaskDeleteViewModel): Promise<void> {
        return await this._apiGateway.Delete(`${this.basePath}/`, taskDeleteVm);
    }
}