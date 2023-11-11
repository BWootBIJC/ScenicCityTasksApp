import {ITaskService} from "../taskAggregate/service/ITaskService";

export interface IServiceCollection {
    TaskService: ITaskService;
}