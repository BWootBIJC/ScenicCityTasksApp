import {Task} from "./Task";

describe("Task", () => {
    let task: Task;
    
    beforeEach(() => {
        task = new Task(1, "name", "description");
    });
    
    it("Calling setName will assign a new name to task", () => {
        const result = task.SetName("new name");
        expect(task.name).toBe("new name");
        expect(result).toBeInstanceOf(Task);
    });
    it("Calling setDescription will assign a new description to a task", () => {
        const result = task.SetDescription("new description");
        expect(task.description).toBe("new description");
        expect(result).toBeInstanceOf(Task);
    })
})