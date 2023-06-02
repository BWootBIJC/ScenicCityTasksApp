import {Task} from "../domain/Task";
import {TaskCreateViewModel} from "../viewModels/TaskCreateViewModel";

export class TaskToViewModelMapper {
    public static MapTaskToTaskCreateViewModel(task: Task): TaskCreateViewModel {
        return {
            id: task.id,
            title: task.title,
            description: task.description
        } as TaskCreateViewModel;
    };
}