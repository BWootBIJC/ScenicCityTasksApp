import React from "react";
import {render, screen, RenderResult} from "@testing-library/react";
import {TaskComponent} from "./TaskComponent";
import {Task} from "../domain/Task";

describe("TaskComponent", () => {
    let taskComponent: RenderResult;
    
    beforeEach(() => {
        taskComponent = render(<TaskComponent task={new Task(1, "title", "description")}/>) 
    });
    
    it("renders to the dom", () => {
        expect(taskComponent).not.toBeNull();
    });
    it("renders a task title", () => {
        const task = screen.getByText("title");
        expect(task).toBeInTheDocument();
    });
    it("renders a task description", () => {
        const description = screen.getByText("description");
        expect(description).toBeInTheDocument();
    });
})