import {render, screen, RenderResult, waitFor} from "@testing-library/react";
import React from "react";
import {Home} from "./Home";
import {Mock} from "moq.ts";
import {TaskItemsView} from "../taskAggregate/domain/TaskItemsView";
import {ITaskGateway} from "../taskAggregate/gateway/ITaskGateway";
import {TaskListViewModel} from "../taskAggregate/viewModels/TaskListViewModel";
import {Task} from "../taskAggregate/domain/Task";
import {TaskContext} from "../taskAggregate/state/TaskContext";

describe("Home", () => {
    let homePage: RenderResult;
    let mockedGateway: Mock<ITaskGateway>;
    let tasks: TaskItemsView;
    let taskListViewModel: TaskListViewModel[];
    let mockTaskContext: any;

    beforeEach(() => {
        taskListViewModel = [
            {
                id: 1,
                title: "name",
                description: "description"
            }
        ]
        mockedGateway = new Mock<ITaskGateway>();
        mockedGateway.setup(x => x.GetAllTasks())
            .returns(Promise.resolve(taskListViewModel))
        tasks = new TaskItemsView([
            new Task(1, "title", "description")
        ]);
        mockTaskContext = {
            tasks,
            setTasks: jest.fn()
        }
    });

    it("renders to the dom when called", async () => {
        homePage = render(
            <TaskContext.Provider value={mockTaskContext}>
                <Home/>
            </TaskContext.Provider>
        );
        await waitFor(() => expect(homePage).not.toBeNull());
    });
    it("renders TaskListComponent", async () => {
        homePage = render(
            <TaskContext.Provider value={mockTaskContext}>
                <Home/>
            </TaskContext.Provider>
        );

        const taskListComponent = await screen.findByTestId("taskList");
        await waitFor(() => expect(taskListComponent).toBeInTheDocument());
    });
    it("renders AddTaskComponent", async () => {
        homePage = render(
            <TaskContext.Provider value={mockTaskContext}>
                <Home/>
            </TaskContext.Provider>
        );

        const addTask = await screen.findByTestId("addTask");
        await waitFor(() => expect(addTask).toBeInTheDocument());
    })
});