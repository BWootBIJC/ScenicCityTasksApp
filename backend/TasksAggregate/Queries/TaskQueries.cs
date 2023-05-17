using backend.TasksAggregate.ViewModels;

namespace backend.TasksAggregate.Queries;

public class TaskQueries : ITaskQueries
{
    private readonly TasksDbContext _dbContext;

    public TaskQueries(TasksDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    public IEnumerable<TaskListViewModel> GetAllTasks()
    {
        return _dbContext.Task.Select(x => new TaskListViewModel(x.Id, x.Name, x.Description ?? string.Empty));
    }
}