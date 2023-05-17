using AutoFixture;
using backend.TasksAggregate.Repos;
using backend.TasksAggregate.ViewModels;
using Moq;
using Xunit;

namespace backend.TasksAggregate.Services;

public class TasksService_Tests
{
    private readonly TaskService _taskService;
    private readonly Mock<ITaskRepository> _taskRepository;
    private readonly Fixture _fixture;
    private readonly TaskEditViewModel _taskEditViewModel;

    public TasksService_Tests()
    {
        _taskRepository = new Mock<ITaskRepository>();
        _taskService = new TaskService(_taskRepository.Object);
        _fixture = new Fixture();
        _taskEditViewModel = _fixture.Create<TaskEditViewModel>();
    }

    [Fact]
    public void CallingCreateTaskCallsRepository()
    {
        _taskRepository.Setup(x => x.Add(It.IsAny<Task>()))
            .Returns(It.IsAny<int>());
        var result = _taskService.CreateTask(_taskEditViewModel);
        _taskRepository.Verify(x => x.Add(It.IsAny<Task>()), Times.Once);
    }
}