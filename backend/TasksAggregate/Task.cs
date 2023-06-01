using backend.TasksAggregate.ViewModels;

namespace backend.TasksAggregate;

public class Task
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }

    public Task(string title, string description)
    {
        Title = title;
        Description = description;
    }

    public Task(TaskEditViewModel taskEditViewModel)
    {
        Title = taskEditViewModel.Title;
        Description = taskEditViewModel.Description;
    }
}