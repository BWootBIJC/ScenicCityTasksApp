namespace backend.TasksAggregate.ViewModels;

public class TaskEditViewModel
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }

    public TaskEditViewModel(string title, string description)
    {
        Title = title;
        Description = description;
    }
}