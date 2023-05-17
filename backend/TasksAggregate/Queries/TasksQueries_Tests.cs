using AutoFixture;
using backend.TasksAggregate.Repos;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Moq;
using Xunit;

namespace backend.TasksAggregate.Queries;

public class TasksQueries_Tests
{
    private readonly TaskRepository _taskRepository;
    private readonly TaskQueries _taskQueries;
    private readonly TasksDbContext _dbContext;
    private readonly Fixture _fixture;
    private readonly Task _task;

    public TasksQueries_Tests()
    {
        var connection = new SqliteConnection("DataSource=:memory:");
        connection.Open();
    
        var options = new DbContextOptionsBuilder<TasksDbContext>()
            .UseSqlite(connection);
    
        _dbContext = new TasksDbContext(options.Options);
        _dbContext.Database.EnsureCreated();
        _fixture = new Fixture();
        _taskRepository = new TaskRepository(_dbContext);
        _task = _fixture.Create<Task>();
        _taskQueries = new TaskQueries(_dbContext);

        _taskRepository.Add(_task);
    }

    [Fact]
    public void CallingGetAllTasksReturnsListOfTasks()
    {
        var result = _taskQueries.GetAllTasks();
        Assert.Single(result);
    }
}