using AutoFixture;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace backend.TasksAggregate.Repos;

public class TasksRepository_Tests
{
    private readonly TaskRepository _taskRepository;
    private readonly TasksDbContext _dbContext;
    private readonly Fixture _fixture;
    private readonly Task _task;

    public TasksRepository_Tests()
    {
        var connection = new SqliteConnection("DataSource=:memory:");
        connection.Open();
    
        var options = new DbContextOptionsBuilder<TasksDbContext>()
            .UseSqlite(connection);
    
        _dbContext = new TasksDbContext(options.Options);
        _dbContext.Database.EnsureCreated();
        _fixture = new Fixture();
        _task = _fixture.Create<Task>();
        _taskRepository = new TaskRepository(_dbContext);
    }

    [Fact]
    public void CanAddTask()
    {
        var result = _taskRepository.Add(_task);
        Assert.Equal(_task.Id, result);
        Assert.Single(_dbContext.Task);
    }
}