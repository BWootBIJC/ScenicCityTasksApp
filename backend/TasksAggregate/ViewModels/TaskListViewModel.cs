namespace backend.TasksAggregate.ViewModels;

public class TaskListViewModel
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }

    public TaskListViewModel(int id, string title, string description)
    {
        Id = id;
        Title = title;
        Description = description;
    }
}