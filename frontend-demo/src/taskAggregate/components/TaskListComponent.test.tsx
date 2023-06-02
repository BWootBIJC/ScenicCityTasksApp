import {render, screen, RenderResult} from "@testing-library/react";
import {TaskListComponent} from "./TaskListComponent";
import {TaskItemsView} from "../domain/TaskItemsView";
import {Task} from "../domain/Task";

describe("Task List Component", () => {
    let taskListComponent: RenderResult;

    beforeEach(() => {
        taskListComponent = render(
            <TaskListComponent tasks={new TaskItemsView([
                new Task(1, "title 1", "description 1"),
                new Task(2, "title 2", "description 2")
            ])}
            />
        );
    });

    it("renders a list of tasks", () => {
        const task1 = screen.queryByText("title 1");
        const task2 = screen.queryByText("title 2");
        expect(task1).toBeInTheDocument();
        expect(task2).toBeInTheDocument();
    })
});