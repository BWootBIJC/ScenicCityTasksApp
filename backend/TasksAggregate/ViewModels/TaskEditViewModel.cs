namespace backend.TasksAggregate.ViewModels;

public class TaskEditViewModel
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }

    public TaskEditViewModel(int id, string title, string description)
    {
        Id = id;
        Title = title;
        Description = description;
    }
}