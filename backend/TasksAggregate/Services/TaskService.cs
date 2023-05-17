using backend.TasksAggregate.Repos;
using backend.TasksAggregate.ViewModels;

namespace backend.TasksAggregate.Services;

public class TaskService : ITaskService
{
    private readonly ITaskRepository _taskRepository;

    public TaskService(ITaskRepository taskRepository)
    {
        _taskRepository = taskRepository;
    }
    
    public int CreateTask(TaskEditViewModel taskEditViewModel)
    {
        var task = new Task(taskEditViewModel);
        
        return _taskRepository.Add(task);
    }
}