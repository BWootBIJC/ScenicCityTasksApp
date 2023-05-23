import {Task} from "./Task.ts";

describe("TaskList", () => {
    let taskList: Task[] = [];
    beforeEach(() => {
        taskList = [
            new Task(1, "task 1", "description 1"),
            new Task(2, "task 2"),
            new Task(3, "task 3", "description 3")
        ];
    });
    
    it("Should contain three tasks", () => {
        expect(taskList.length).toBe(3);
    });
    it("Calling AddTask adds the task to the current list of tasks", () => {
        
    })
})