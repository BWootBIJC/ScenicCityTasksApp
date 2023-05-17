using backend.TasksAggregate.ViewModels;

namespace backend.TasksAggregate.Queries;

public interface ITaskQueries
{
    public IEnumerable<TaskListViewModel> GetAllTasks();
}