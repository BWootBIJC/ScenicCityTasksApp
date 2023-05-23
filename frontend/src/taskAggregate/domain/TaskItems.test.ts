import {TaskItems} from "./TaskItems.ts";
import {Task} from "./Task.ts";

describe("TaskItems", () => {
    let taskItems: TaskItems;
    
    beforeEach(() => {
        taskItems = new TaskItems([
            new Task(1, "title 1", "description 1"),
            new Task(2, "title 2", "description 2"),
            new Task(3, "title 3", "description 3"),
        ]);
    });
});