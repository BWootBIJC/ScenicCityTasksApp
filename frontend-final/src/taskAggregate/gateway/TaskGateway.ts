import {IAPIGateway} from "../../apiGateway/IAPIGateway";
import {ITaskGateway} from "./ITaskGateway";
import {TaskListViewModel} from "../viewModels/TaskListViewModel";
import {TaskCreateViewModel} from "../viewModels/TaskCreateViewModel";


export class TaskGateway implements ITaskGateway {
    private readonly _apiGateway: IAPIGateway;
    private readonly basePath: string = "api/task"
    
    constructor(apiGateway: IAPIGateway) {
        this._apiGateway = apiGateway;
    };
    
    public async getAllTasks(): Promise<TaskListViewModel[]> {
        return await this._apiGateway.Get(`${this.basePath}/list`);
    };
    
    public async addTask(taskCreateVm: TaskCreateViewModel): Promise<number> {
        return await this._apiGateway.Post(`${this.basePath}/`, taskCreateVm);
    }
    
    public async deleteTask(taskId: number): Promise<void> {
        return await this._apiGateway.Delete(`${this.basePath}/${taskId}`);
    }
}