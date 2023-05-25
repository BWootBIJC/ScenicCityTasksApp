import {render, RenderResult} from "@testing-library/react";
import {AddTask} from "./AddTask";

describe("Add Task Component", () => {
    let addTask: RenderResult;
    
    beforeEach(() => {
        addTask = render(<AddTask/>)
    });
    
    it("Renders to the dom when called", () => {
        expect(addTask).not.toBeNull();
    })
})