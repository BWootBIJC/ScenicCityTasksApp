using Microsoft.EntityFrameworkCore;

namespace backend;

public class TasksDbContext : DbContext
{
    public TasksDbContext(DbContextOptions<TasksDbContext> options) : base(options)
    {
    }
    
    public DbSet<TasksAggregate.Task> Task { get; set; }
}