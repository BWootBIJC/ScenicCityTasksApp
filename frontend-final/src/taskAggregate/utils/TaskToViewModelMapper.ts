import {TaskCard} from "../domain/TaskCard";
import {TaskCreateViewModel} from "../viewModels/TaskCreateViewModel";

export class TaskToViewModelMapper {
    public static MapTaskToTaskCreateViewModel(task: TaskCard): TaskCreateViewModel {
        return {
            id: task.id,
            title: task._title,
            description: task._description
        } as TaskCreateViewModel;
    };
}