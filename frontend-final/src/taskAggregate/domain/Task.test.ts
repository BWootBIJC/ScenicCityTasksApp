import {TaskCard} from "./TaskCard";

describe("Task", () => {
    let task: TaskCard;
    
    beforeEach(() => {
        task = new TaskCard(1, "name", "description");
    });
    
    it("Calling setName will assign a new name to task", () => {
        const result = task.setTitle("new name");
        expect(result._title).toBe("new name");
        expect(result).toBeInstanceOf(TaskCard);
    });
    it("Calling setDescription will assign a new description to a task", () => {
        const result = task.setDescription("new description");
        expect(result._description).toBe("new description");
        expect(result).toBeInstanceOf(TaskCard);
    });
    it("Calling EmptyFields empties title and description", () => {
        const result = task.emptyFields();
        expect(result._title).toBe("");
        expect(result._description).toBe("");
        expect(result).toBeInstanceOf(TaskCard);
    })
})