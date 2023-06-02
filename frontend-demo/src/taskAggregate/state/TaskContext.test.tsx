import {render, waitFor, screen} from "@testing-library/react";
import {ITaskRepository} from "../repository/ITaskRepository";
import {Mock, Times} from "moq.ts";
import {TaskItemsView} from "../domain/TaskItemsView";
import {ITaskContext, TaskContext, TaskContextProvider} from "./TaskContext";

describe("Task Context", () => {
    let repoMock: Mock<ITaskRepository>;
    let taskViewMock: Mock<TaskItemsView>;
    let mockTasks: TaskItemsView;

    beforeEach(() => {
        repoMock = new Mock<ITaskRepository>();
        taskViewMock = new Mock<TaskItemsView>();
        mockTasks = taskViewMock.object();
        repoMock.setup(x => x.GetAllTasks()).returns(Promise.resolve(mockTasks))
    });

    it("Renders children", async () => {
        render(
            <TaskContextProvider taskRepo={repoMock.object()}>
                <div>Child Component</div>
            </TaskContextProvider>
        );

        const childComponent = screen.getByText("Child Component");

        await waitFor(() => expect(childComponent).toBeInTheDocument());
    });

    it("calls repo on mount", async () => {
        render(
            <TaskContextProvider taskRepo={repoMock.object()}>
                <div />
            </TaskContextProvider>
        );

        await waitFor(() => repoMock.verify(x => x.GetAllTasks(), Times.Once()));
    });

    it("sets tasks after fetching", async () => {
        let contextValue: ITaskContext | undefined;
        render(
            <TaskContextProvider taskRepo={repoMock.object()}>
                <TaskContext.Consumer>
                    {context => {
                        contextValue = context;
                        return <div />;
                    }}
                </TaskContext.Consumer>
            </TaskContextProvider>
        );

        await waitFor(() => expect(contextValue?.tasks).toEqual(new TaskItemsView(mockTasks.tasks)));
    });
    it("handles fetch errors", async () => {
        const error = new Error("Error fetching tasks")
        repoMock.setup(instance => instance.GetAllTasks()).returns(Promise.reject(error));
        jest.spyOn(window, 'alert').mockImplementation(() => {});

        render(
            <TaskContextProvider taskRepo={repoMock.object()}>
                <div />
            </TaskContextProvider>
        );

        await waitFor(() => expect(window.alert).toHaveBeenCalledWith(error.message));
    });
});