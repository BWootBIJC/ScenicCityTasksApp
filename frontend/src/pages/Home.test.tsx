import {render, screen, RenderResult, waitFor} from "@testing-library/react";
import React from "react";
import {Home} from "./Home";
import {Mock} from "moq.ts";
import {TaskItemsView} from "../taskAggregate/domain/TaskItemsView";
import {ITaskGateway} from "../taskAggregate/gateway/ITaskGateway";
import {TaskListViewModel} from "../taskAggregate/viewModels/TaskListViewModel";

//TODO: Come back to this test
describe.skip("Home", () => {
    let homePage: RenderResult;
    let mockedGateway: Mock<ITaskGateway>;
    let tasks: TaskItemsView;
    let taskListViewModel: TaskListViewModel[];
    
    beforeEach(() => {
        taskListViewModel = [
            {
                id: 1,
                name: "name",
                description: "description"
            }
        ]
        mockedGateway = new Mock<ITaskGateway>();
        mockedGateway.setup(x => x.GetAllTasks())
            .returns(Promise.resolve(taskListViewModel))
        tasks = new TaskItemsView([]);
    });
    
    it("renders to the dom when called", async () => {
        homePage = render(<Home />);
        await waitFor(() => expect(homePage).not.toBeNull());
    });
    it("renders TaskListComponent", async() => {
        homePage = render(<Home />);

        const taskListComponent = await screen.findByTestId("taskList");
        await waitFor(() => expect(taskListComponent).toBeInTheDocument());
    });
    it("renders AddTaskComponent", async () => {
        homePage = render(<Home/>);

        const addTask = await screen.findByTestId("addTask");
        await waitFor(() => expect(addTask).toBeInTheDocument());
    })
});