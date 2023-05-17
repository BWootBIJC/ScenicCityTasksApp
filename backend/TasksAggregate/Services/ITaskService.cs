using backend.TasksAggregate.ViewModels;

namespace backend.TasksAggregate.Services;

public interface ITaskService
{
    public int CreateTask(TaskEditViewModel taskEditViewModel);
    public IEnumerable<TaskListViewModel> GetAllTasks();
    public void DeleteTask(int id);
}