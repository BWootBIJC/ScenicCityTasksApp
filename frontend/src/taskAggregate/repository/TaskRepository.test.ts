﻿import {TaskRepository} from "./TaskRepository.ts";
import {ITaskGateway} from "../gateway/ITaskGateway.ts";
import {Mock, Times} from "moq.ts";
import {TaskListViewModel} from "../viewModels/TaskListViewModel.ts";
import {Task} from "../domain/Task.ts";
import {TaskItems} from "../domain/TaskItems.ts";

describe("Task Repository", () => {
    let taskRepository: TaskRepository;
    let taskGateway: Mock<ITaskGateway>;
    let taskListViewModel: TaskListViewModel[];
    
    beforeEach(() => {
        taskGateway = new Mock<ITaskGateway>();
        taskRepository = new TaskRepository(taskGateway.object());
        taskListViewModel = [
            {
                id: 1,
                title: "title",
                description: "description"
            }
        ]
    });
    
    it("Calling create tasks, it calls gateway", () => {
        //Arrange
        taskGateway.setup(x => x.GetAllTasks())
            .returns(Promise.resolve(taskListViewModel));
        
        //Act
        taskRepository.CreateTasks();
        
        //Assert
        taskGateway.verify(x => x.GetAllTasks(), Times.Once());
    });
    it('Calling CreateTasks, creates tasks from view model', async () => {
        //Arrange
        taskGateway.setup(x => x.GetAllTasks())
            .returns(Promise.resolve(taskListViewModel));
        
        //Act
        const result = await taskRepository.CreateTasks();
        
        //Assert
        expect(result.tasks).toHaveLength(1);
        expect(result.tasks).toBeInstanceOf(Array<Task>);
        expect(result).toBeInstanceOf(TaskItems);
    });
});