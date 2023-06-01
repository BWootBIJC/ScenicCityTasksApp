namespace backend.TasksAggregate.Repos;

public class TaskRepository : ITaskRepository
{
    private readonly TasksDbContext _dbContext;

    public TaskRepository(TasksDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    public int Add(Task task)
    {
        _dbContext.Task.Add(task);
        _dbContext.SaveChanges();
        return task.Id;
    }

    public void Remove(int id)
    {
        var taskToDelete = _dbContext.Task.FirstOrDefault(x => x.Id == id);
        if (taskToDelete != null)
        {
            _dbContext.Task.Remove(taskToDelete);
            _dbContext.SaveChanges();
        }
    }
}