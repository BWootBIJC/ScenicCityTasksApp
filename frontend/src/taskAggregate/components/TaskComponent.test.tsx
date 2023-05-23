import {render, RenderResult} from "@testing-library/react";
import {TaskComponent} from "./TaskComponent.tsx";
import {Task} from "../domain/Task.ts";

describe("TaskComponent", () => {
    let taskComponent: RenderResult;
    
    beforeEach(() => {
        taskComponent = render(<TaskComponent task={new Task(1, "title")}/>) 
    });
    
    it("renders to the dom", () => {
        expect(taskComponent).toBeInTheDocument();
    })
})