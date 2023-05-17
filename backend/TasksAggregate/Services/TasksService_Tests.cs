using AutoFixture;
using backend.TasksAggregate.Queries;
using backend.TasksAggregate.Repos;
using backend.TasksAggregate.ViewModels;
using Moq;
using Xunit;

namespace backend.TasksAggregate.Services;

public class TasksService_Tests
{
    private readonly TaskService _taskService;
    private readonly Mock<ITaskRepository> _taskRepository;
    private readonly Mock<ITaskQueries> _taskQueries;
    private readonly Fixture _fixture;
    private readonly TaskEditViewModel _taskEditViewModel;
    private readonly IEnumerable<TaskListViewModel> _taskListViewModel;

    public TasksService_Tests()
    {
        _taskRepository = new Mock<ITaskRepository>();
        _taskQueries = new Mock<ITaskQueries>();
        _taskService = new TaskService(_taskRepository.Object, _taskQueries.Object);
        _fixture = new Fixture();
        _taskListViewModel = _fixture.Create<IEnumerable<TaskListViewModel>>();
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

    [Fact]
    public void CallingGetAllTasksCallsQuery()
    {
        _taskQueries.Setup(x => x.GetAllTasks())
            .Returns(_taskListViewModel);
        var result = _taskService.GetAllTasks();
        _taskQueries.Verify(x => x.GetAllTasks(), Times.Once);
    }

    [Fact]
    public void CallingDeleteTaskCallsRepository()
    {
        _taskRepository.Setup(x => x.Remove(It.IsAny<int>()));
        _taskService.DeleteTask(It.IsAny<int>());
        _taskRepository.Verify(x => x.Remove(It.IsAny<int>()), Times.Once);
    }
}