namespace backend.TasksAggregate;

public class Task
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }

    public Task(int id, string name, string description)
    {
        Id = id;
        Name = name;
        Description = description;
    }
}