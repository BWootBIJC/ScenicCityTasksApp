using backend.TasksAggregate.ViewModels;

namespace backend.TasksAggregate;

public class Task
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }

    public Task(int id, string title, string description)
    {
        Id = id;
        Title = title;
        Description = description;
    }

    public Task(TaskEditViewModel taskEditViewModel)
    {
        Id = taskEditViewModel.Id;
        Title = taskEditViewModel.Title;
        Description = taskEditViewModel.Description;
    }
}