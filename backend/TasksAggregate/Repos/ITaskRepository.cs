﻿namespace backend.TasksAggregate.Repos;

public interface ITaskRepository
{
    public int Add(Task task);
    public void Remove(int id);
}