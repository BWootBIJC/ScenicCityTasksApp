import {ITaskRepository} from "../repository/ITaskRepository";
import {ITaskService} from "./ITaskService";
import {TaskCard} from "../domain/TaskCard";
import {TaskItemsView} from "../domain/TaskItemsView";

export class TaskService implements ITaskService {
    private readonly _taskRepository: ITaskRepository;
    
    constructor(taskRepository: ITaskRepository) {
        this._taskRepository = taskRepository;
    }

    public async addTask(taskCard: TaskCard): Promise<TaskItemsView> {
        await this._taskRepository.addTask(taskCard);
        return await this._taskRepository.getAllTasks();
    }

    public async getAllTasks(): Promise<TaskItemsView> {
        return await this._taskRepository.getAllTasks();
    }
    
    public async deleteTask(taskId: number): Promise<TaskItemsView> {
        await this._taskRepository.deleteTask(taskId);
        return await this._taskRepository.getAllTasks();
    }
}