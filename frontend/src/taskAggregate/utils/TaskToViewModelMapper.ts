import {Task} from "../domain/Task";
import {TaskCreateViewModel} from "../viewModels/TaskCreateViewModel";
import {TaskDeleteViewModel} from "../viewModels/TaskDeleteViewModel";

export class TaskToViewModelMapper {
    public static MapTaskToTaskCreateViewModel(task: Task): TaskCreateViewModel {
        return {
            id: task.id,
            title: task.title,
            description: task.description
        } as TaskCreateViewModel;
    };
    
    public static MapTaskToTaskDeleteViewModel(task: Task): TaskDeleteViewModel {
        return {
            id: task.id,
            title: task.title,
            description: task.description
        } as TaskDeleteViewModel;
    }
}