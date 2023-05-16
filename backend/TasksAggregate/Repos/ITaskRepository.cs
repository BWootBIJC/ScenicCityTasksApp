using backend.TasksAggregate.ViewModels;

namespace backend.TasksAggregate.Repos;

public interface ITaskRepository
{
    public TaskEditViewModel CreateTask(TaskEditViewModel taskEditViewModel);
}