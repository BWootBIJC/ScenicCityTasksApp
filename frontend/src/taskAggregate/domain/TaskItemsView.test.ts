import {TaskItemsView} from "./TaskItemsView";
import {Task} from "./Task";


describe("TaskItems", () => {
    let taskItems: TaskItemsView;
    
    beforeEach(() => {
        taskItems = new TaskItemsView([
            new Task(1, "title 1", "description 1"),
            new Task(2, "title 2", "description 2"),
            new Task(3, "title 3", "description 3"),
        ]);
    });
    
    it("On Calling add tasks, it adds a new task to the task items list", () => {
        //Act
        const result = taskItems.AddTask(4, new Task(1, "title 4", "description 4"));
        
        //Assert
        expect(result.tasks).toHaveLength(4);
        expect(result).toBeInstanceOf(TaskItemsView);
    });
    
    it("If name has empty value, it throws an error", () => {
        //Act & Assert
        expect(() => taskItems.AddTask(4, new Task(1, "", "")))
            .toThrowError("Please provide a name.");
    });
    
    it("If task has no description, it throws an error", () => {
       expect(() => taskItems.AddTask(4, new Task(1, "name", "")))
           .toThrowError("Please provide a description."); 
    });
    
    it("On calling remove item, it removes the specified task from list", () => {
        //Act
        const result = taskItems.RemoveTask(taskItems.tasks[1]);
        
        //Assert
        expect(result.tasks.length).toBe(2);
        expect(result).toBeInstanceOf(TaskItemsView);
    });
});