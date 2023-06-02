import {render, screen, RenderResult} from "@testing-library/react";
import {AddTask} from "./AddTask";
import {ITaskRepository} from "../repository/ITaskRepository";
import {Mock} from "moq.ts";

describe("Add Task Component", () => {
    let addTask: RenderResult;
    let taskRepo: Mock<ITaskRepository>;
    
    beforeEach(() => {
        taskRepo = new Mock<ITaskRepository>();
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
});