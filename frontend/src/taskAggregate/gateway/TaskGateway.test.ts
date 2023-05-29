
import {It, Mock, Times} from "moq.ts";
import {TaskListViewModel} from "../viewModels/TaskListViewModel";
import {IAPIGateway} from "../../apiGateway/IAPIGateway";
import {TaskGateway} from "./TaskGateway";
import {TaskCreateViewModel} from "../viewModels/TaskCreateViewModel";

describe("TaskGateway", () => {
    let taskGateway: TaskGateway;
    let apiGateway: Mock<IAPIGateway>;
    let taskViewModel: TaskListViewModel[];
    let taskCreateViewModel: TaskCreateViewModel;
    
    beforeEach(() => {
        apiGateway = new Mock<IAPIGateway>();
        taskGateway = new TaskGateway(apiGateway.object());
        taskViewModel = [
            {
                id: 1,
                title: "title",
                description: "description"
            }
        ];
        taskCreateViewModel = {
            id: 1,
            title: "title",
            description: "description"
        };
    });
    
    it("When calling GetAllTasks, it calls correct api gateway method", async () => {
        //Arrange
        apiGateway.setup(x => x.Get(It.IsAny<string>()))
            .returns(Promise.resolve(taskViewModel));
        
        //Act
        await taskGateway.GetAllTasks();
        
        //Assert
        apiGateway.verify(x => x.Get(It.IsAny<string>()), Times.Once());
    });
    it("When calling AddTask, it calls correct api gateway method", async () => {
        //Arrange
        apiGateway.setup(x => x.Post(It.IsAny<string>(), It.IsAny<TaskCreateViewModel>()))
            .returns(Promise.resolve(1));
        
        //Act
        await taskGateway.AddTask(taskCreateViewModel);
        
        apiGateway.verify(x => x.Post(It.IsAny<string>(), It.IsAny<TaskCreateViewModel>()), Times.Once());
    });
    it("When calling DeleteTask, it calls correct api gateway method", async () => {
        //Arrange
        apiGateway.setup(x => x.Delete(It.IsAny<string>()))
            .returns(Promise.resolve());

        //Act
        await taskGateway.DeleteTask(1);

        apiGateway.verify(x => x.Delete(It.IsAny<string>()), Times.Once());
    });
});