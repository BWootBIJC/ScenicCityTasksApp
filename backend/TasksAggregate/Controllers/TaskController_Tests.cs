using AutoFixture;
using backend.TasksAggregate.Services;
using backend.TasksAggregate.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

namespace backend.TasksAggregate.Controllers;

public class TaskController_Tests
{
    private readonly TaskController _taskController;
    private readonly Mock<ITaskService> _taskService;
    private readonly TaskEditViewModel _taskEditViewModel;
    private readonly Fixture _fixture;

    public TaskController_Tests()
    {
        _fixture = new Fixture();
        _taskService = new Mock<ITaskService>();
        _taskController = new TaskController(_taskService.Object);
        _taskEditViewModel = _fixture.Create<TaskEditViewModel>();
    }

    [Fact]
    public void CallingCreateTaskReturns_OnSuccess_ReturnsCreatedAtActionResult()
    {
        _taskService.Setup(x => x.CreateTask(_taskEditViewModel))
            .Returns(It.IsAny<int>());
        var result = (CreatedAtActionResult)_taskController.CreateTask(_taskEditViewModel);
        Assert.Equal(StatusCodes.Status201Created, result.StatusCode);
    }

    [Fact]
    public void CallingCreateTaskCallsService()
    {
        _taskService.Setup(x => x.CreateTask(_taskEditViewModel))
            .Returns(It.IsAny<int>());
        var result = _taskController.CreateTask(_taskEditViewModel);
        _taskService.Verify(x => x.CreateTask(_taskEditViewModel), Times.Once);
    }

    [Fact]
    public void CallingCreateTaskReturns_OnError_ReturnsBadRequestObject()
    {
        _taskService.Setup(x => x.CreateTask(_taskEditViewModel))
            .Throws<Exception>();
        var result = (BadRequestObjectResult)_taskController.CreateTask(_taskEditViewModel);
        Assert.Equal(StatusCodes.Status400BadRequest, result.StatusCode);
    }
}