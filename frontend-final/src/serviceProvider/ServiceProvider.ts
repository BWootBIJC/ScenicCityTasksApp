import {IServiceCollection} from "./IServiceCollection";
import {APIResponseHandler} from "../apiGateway/APIResponseHandler";
import {APIGateway} from "../apiGateway/APIGateway";
import {TaskGateway} from "../taskAggregate/gateway/TaskGateway";
import {TaskRepository} from "../taskAggregate/repository/TaskRepository";
import {TaskService} from "../taskAggregate/service/TaskService";

export class ServiceProvider {
    private static _instance: ServiceProvider;
    private _serviceCollection: IServiceCollection;
    
    private constructor() {
        const jsonResponseHandler = new APIResponseHandler();
        const apiGateway = new APIGateway(jsonResponseHandler);
        const taskGateway = new TaskGateway(apiGateway);
        const taskRepository = new TaskRepository(taskGateway);
        const taskService = new TaskService(taskRepository);
        
        this._serviceCollection = {
            TaskService: taskService
        }
    }
    
    public static getInstance() {
        if(ServiceProvider._instance) {
            return ServiceProvider._instance;
        } else {
            return new ServiceProvider();
        }
    }
    
    public getServiceCollection() {
        return this._serviceCollection;
    }
}