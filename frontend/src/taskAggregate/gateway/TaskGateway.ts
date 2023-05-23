import {ITaskGateway} from "./ITaskGateway.ts";
import {IAPIGateway} from "../../apiGateway/IAPIGateway.ts";
import {TaskListViewModel} from "../viewModels/TaskListViewModel.ts";

export class TaskGateway implements ITaskGateway {
    private readonly _apiGateway: IAPIGateway;
    private readonly basePath: string = "api/task"
    
    constructor(apiGateway: IAPIGateway) {
        this._apiGateway = apiGateway;
    };
    
    public async GetAllTasks(): Promise<TaskListViewModel[]> {
        return await this._apiGateway.Get(`${this.basePath}/list`);
    };
}