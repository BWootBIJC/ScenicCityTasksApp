using backend.TasksAggregate.Services;
using backend.TasksAggregate.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace backend.TasksAggregate.Controllers;

[ApiController]
[Route("api/task")]
public class TaskController : ControllerBase
{
    private readonly ITaskService _taskService;
    public TaskController(ITaskService taskService)
    {
        _taskService = taskService;
    }
    
    [HttpPost]
    [Route("")]
    public IActionResult CreateTask(TaskEditViewModel taskEditViewModel)
    {
        try
        {
            var result = _taskService.CreateTask(taskEditViewModel);
            return CreatedAtAction(nameof(GetAllTasks), new { id = result }, result);
        }
        catch (Exception e)
        {
            return new BadRequestObjectResult(e);
        }
    }

    [HttpGet]
    [Route("list")]
    public IActionResult GetAllTasks()
    {
        throw new NotImplementedException();
    }
}