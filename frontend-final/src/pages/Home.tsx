import {TaskListComponent} from "../taskAggregate/components/TaskListComponent";
import React, {useContext} from "react";
import {AddTask} from "../taskAggregate/components/AddTask";
import {TaskContext} from "../taskAggregate/state/TaskContext";
import {TaskRepository} from "../taskAggregate/repository/TaskRepository";
import {APIResponseHandler} from "../apiGateway/APIResponseHandler";
import {APIGateway} from "../apiGateway/APIGateway";
import {TaskGateway} from "../taskAggregate/gateway/TaskGateway";
export const Home = () => {
    const taskContext = useContext(TaskContext);
    const apiHandler = new APIResponseHandler();
    const apiGateway = new APIGateway(apiHandler);
    const taskGateway = new TaskGateway(apiGateway);

    if(!taskContext?.tasks) {
        return <></>
    }
    
    return (
        <>
            <div className="max-w-7xl md:max-w-6xl mx-auto mt-32">
                <AddTask dataTestId="addTask" taskRepo={new TaskRepository(taskGateway)}/>
                <TaskListComponent tasks={taskContext?.tasks}/>
            </div>
        </>
    )
}