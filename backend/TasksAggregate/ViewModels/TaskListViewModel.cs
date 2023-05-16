namespace backend.TasksAggregate.ViewModels;

public class TaskListViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }

    public TaskListViewModel(int id, string name, string description)
    {
        Id = id;
        Name = name;
        Description = description;
    }
}