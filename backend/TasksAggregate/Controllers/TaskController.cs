using backend.TasksAggregate.Services;
using backend.TasksAggregate.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Exception = System.Exception;

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
        try
        {
            return new OkObjectResult(_taskService.GetAllTasks());
        }
        catch (Exception e)
        {
            return new BadRequestObjectResult(e);
        }
    }

    [HttpDelete]
    [Route("{taskId}")]
    public IActionResult DeleteTask(int taskId)
    {
        try
        {
            _taskService.DeleteTask(taskId);
            return NoContent();
        }
        catch (Exception e)
        {
            return new BadRequestObjectResult(e);
        }
    }
}