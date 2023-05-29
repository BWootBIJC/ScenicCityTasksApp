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

        homePage = render(
            <TaskContext.Provider value={mockTaskContext}>
                <Home/>
            </TaskContext.Provider>
        );
    });

    it("renders to the dom when called", () => {
        expect(homePage).not.toBeNull();
    });
    it("renders TaskListComponent", async () => {
        const taskListComponent = await screen.findByTestId("taskList");
        expect(taskListComponent).toBeInTheDocument();
    });
    it("renders AddTaskComponent", async () => {
        const addTask = await screen.findByTestId("addTask");
        expect(addTask).toBeInTheDocument();
    })
});