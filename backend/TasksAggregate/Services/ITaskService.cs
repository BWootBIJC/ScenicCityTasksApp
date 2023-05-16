using backend.TasksAggregate.ViewModels;

namespace backend.TasksAggregate.Services;

public interface ITaskService
{
    public TaskEditViewModel CreateTask(TaskEditViewModel taskEditViewModel);
}