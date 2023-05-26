import React from "react";
import {render, screen, RenderResult} from "@testing-library/react";
import {TaskComponent} from "./TaskComponent";
import {Task} from "../domain/Task";

describe("TaskComponent", () => {
    let taskComponent: RenderResult;

    beforeEach(() => {
        taskComponent = render(<TaskComponent
                task={new Task(1, "title", "description")}
            />
        )
    });

    it("renders to the dom", () => {
        expect(taskComponent).not.toBeNull();
    });
    it("Renders task description", () => {
        const taskDescriptionComponent = screen.getByTestId("taskDescription");
        expect(taskDescriptionComponent).toBeInTheDocument();
    });
    it("Renders the button component", () => {
        const button = screen.getByTestId("removeButton");
        expect(button).toBeInTheDocument();
    })
});