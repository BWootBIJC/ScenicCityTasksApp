import {render, screen, RenderResult, waitFor} from "@testing-library/react";
import React from "react";
import {Home} from "./Home";
import {Mock} from "moq.ts";
import {TaskItems} from "../taskAggregate/domain/TaskItems";
import {TaskRepository} from "../taskAggregate/repository/TaskRepository";
import {ITaskGateway} from "../taskAggregate/gateway/ITaskGateway";
import {TaskListViewModel} from "../taskAggregate/viewModels/TaskListViewModel";

describe("Home", () => {
    let homePage: RenderResult;
    let mockedGateway: Mock<ITaskGateway>;
    let tasks: TaskItems;
    let taskListViewModel: TaskListViewModel[];
    
    beforeEach(() => {
        taskListViewModel = [
            {
                id: 1,
                title: "title",
                description: "description"
            }
        ]
        mockedGateway = new Mock<ITaskGateway>();
        mockedGateway.setup(x => x.GetAllTasks())
            .returns(Promise.resolve(taskListViewModel))
        tasks = new TaskItems([]);
    });
    
    it("renders to the dom when called", async () => {
        homePage = render(<Home repo={new TaskRepository(mockedGateway.object())}/>);
        await waitFor(() => expect(homePage).not.toBeNull());
    });
    it("renders TaskListComponent", async() => {
        homePage = render(<Home repo={new TaskRepository(mockedGateway.object())}/>);

        const taskListComponent = await screen.findByTestId("taskList");
        await waitFor(() => expect(taskListComponent).toBeInTheDocument());
    })
});