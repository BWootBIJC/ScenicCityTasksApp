
import {It, Mock, Times} from "moq.ts";
import {TaskListViewModel} from "../viewModels/TaskListViewModel";
import {IAPIGateway} from "../../apiGateway/IAPIGateway";
import {TaskGateway} from "./TaskGateway";

describe("TaskGateway", () => {
    let taskGateway: TaskGateway;
    let apiGateway: Mock<IAPIGateway>;
    let taskViewModel: TaskListViewModel[];
    
    beforeEach(() => {
        apiGateway = new Mock<IAPIGateway>();
        taskGateway = new TaskGateway(apiGateway.object());
        taskViewModel = [
            {
                id: 1,
                title: "title",
                description: "description"
            }
        ]
    });
    
    it("When calling GetAllTasks, it calls correct api gateway method", () => {
        //Arrange
        apiGateway
            .setup(x => x.Get(It.IsAny<string>()))
            .returns(Promise.resolve(taskViewModel));
        
        //Act
        taskGateway.GetAllTasks();
        
        //Assert
        apiGateway
            .verify(x => x.Get(It.IsAny<string>()), Times.Once());
    })
});