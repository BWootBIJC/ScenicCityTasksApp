using backend.TasksAggregate.Queries;
using backend.TasksAggregate.Repos;
using backend.TasksAggregate.ViewModels;

namespace backend.TasksAggregate.Services;

public class TaskService : ITaskService
{
    private readonly ITaskRepository _taskRepository;
    private readonly ITaskQueries _taskQueries;

    public TaskService(ITaskRepository taskRepository, ITaskQueries taskQueries)
    {
        _taskRepository = taskRepository;
        _taskQueries = taskQueries;
    }
    
    public int CreateTask(TaskEditViewModel taskEditViewModel)
    {
        var task = new Task(taskEditViewModel);
        
        return _taskRepository.Add(task);
    }

    public IEnumerable<TaskListViewModel> GetAllTasks()
    {
        return _taskQueries.GetAllTasks();
    }
}