import {Task} from "./Task";

describe("Task", () => {
    let task: Task;
    
    beforeEach(() => {
        task = new Task(1, "name", "description");
    });
    
    it("Calling setName will assign a new name to task", () => {
        const result = task.SetTitle("new name");
        expect(result.title).toBe("new name");
        expect(result).toBeInstanceOf(Task);
    });
    it("Calling setDescription will assign a new description to a task", () => {
        const result = task.SetDescription("new description");
        expect(result.description).toBe("new description");
        expect(result).toBeInstanceOf(Task);
    });
    it("Calling EmptyFields empties title and description", () => {
        const result = task.EmptyFields();
        expect(result.title).toBe("");
        expect(result.description).toBe("");
        expect(result).toBeInstanceOf(Task);
    })
})