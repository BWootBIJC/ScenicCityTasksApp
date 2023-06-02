import {render, screen, RenderResult, waitFor} from "@testing-library/react";
import {AddTask} from "./AddTask";
import {ITaskRepository} from "../repository/ITaskRepository";
import {It, Mock, Times} from "moq.ts";
import React, {} from "react";
import {Task} from "../domain/Task";
import userEvent from "@testing-library/user-event/";
import {TaskItemsView} from "../domain/TaskItemsView";
import {ITaskContext} from "../state/TaskContext";

describe("Add Task Component", () => {
    let addTask: RenderResult;
    let taskRepo: Mock<ITaskRepository>;
    let task: Mock<TaskItemsView>;
    
    beforeEach(() => {
        taskRepo = new Mock<ITaskRepository>();
        task = new Mock<TaskItemsView>();
        addTask = render(
            <AddTask
                taskRepo={taskRepo.object()}
                dataTestId="addTask"
        />);
    });
    
    it("Renders to the dom when called", () => {
        expect(addTask).not.toBeNull();
    });
    it("Renders title to document", () => {
        const h1 = screen.getByRole("h1");
        expect(h1).toBeInTheDocument();
        expect(h1.innerHTML).toBe("Add Task");
    });
    it("Renders input component", () => {
        const input = screen.getByTestId("input");
        expect(input).toBeInTheDocument();
    });
    it("Renders textarea component", () => {
        const textArea = screen.getByTestId("textArea");
        expect(textArea).toBeInTheDocument();
    });
    it("Renders add task button", () => {
        const button = screen.getByTestId("button");
        expect(button).toBeInTheDocument();
    });
    it('calls repository AddTask method', async() => {
        taskRepo.setup(x => x.AddTask(It.IsAny<Task>())).returns(Promise.resolve(1));
        const button = screen.getByTestId("button");

        await userEvent.click(button);

        await waitFor(() => taskRepo.verify(x => x.AddTask(It.IsAny<Task>()), Times.Once()));
    });
});