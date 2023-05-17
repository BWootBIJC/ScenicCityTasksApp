namespace backend.TasksAggregate.ViewModels;

public class TaskEditViewModel
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }

    public TaskEditViewModel(int id, string name, string? description)
    {
        Id = id;
        Name = name;
        Description = description;
    }
}