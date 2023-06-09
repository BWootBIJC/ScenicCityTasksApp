﻿using AutoFixture;
using backend.TasksAggregate.Services;
using backend.TasksAggregate.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;
using Xunit.Sdk;

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

    [Fact]
    public void CallingGetAllTasks_OnSuccess_ReturnsOkObjectResult()
    {
        var result = (OkObjectResult)_taskController.GetAllTasks();
        _taskService.Verify(x => x.GetAllTasks(), Times.Once);
        Assert.Equal(StatusCodes.Status200OK, result.StatusCode);
    }

    [Fact]
    public void CallingGetAllTasks_OnError_ReturnsBadRequestObjectResult()
    {
        _taskService.Setup(x => x.GetAllTasks())
            .Throws<Exception>();

        var result = (BadRequestObjectResult)_taskController.GetAllTasks();
        Assert.Equal(StatusCodes.Status400BadRequest, result.StatusCode);
    }

    [Fact]
    public void CallingDeleteTask_OnSuccess_ReturnsOkObjectResult()
    {
        var result = (NoContentResult)_taskController.DeleteTask(It.IsAny<int>());
        _taskService.Verify(x => x.DeleteTask(It.IsAny<int>()), Times.Once);
        Assert.Equal(StatusCodes.Status204NoContent, result.StatusCode);
    }

    [Fact]
    public void CallingDeleteTask_OnError_ReturnsBadRequestObjectResult()
    {
        _taskService.Setup(x => x.DeleteTask(It.IsAny<int>()))
            .Throws<Exception>();
        var result = (BadRequestObjectResult)_taskController.DeleteTask(It.IsAny<int>());
        Assert.Equal(StatusCodes.Status400BadRequest, result.StatusCode);
    }
}