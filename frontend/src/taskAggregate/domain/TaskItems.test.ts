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
        const result = taskItems.AddTask(new Task(4, "title 4", "description 4"));
        
        //Assert
        expect(taskItems.tasks).toHaveLength(4);
        expect(result).toBeInstanceOf(TaskItemsView);
    });
});