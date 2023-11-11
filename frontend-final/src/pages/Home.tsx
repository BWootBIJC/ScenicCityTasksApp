import {TaskListComponent} from "../taskAggregate/components/TaskListComponent";
import React, {useContext} from "react";
import {AddTask} from "../taskAggregate/components/AddTask";
import {TaskContext} from "../taskAggregate/state/TaskContext";
import {TaskRepository} from "../taskAggregate/repository/TaskRepository";
import {APIResponseHandler} from "../apiGateway/APIResponseHandler";
import {APIGateway} from "../apiGateway/APIGateway";
import {TaskGateway} from "../taskAggregate/gateway/TaskGateway";
export const Home = () => {
    const { tasks } = useContext(TaskContext);
    
    return (
        <>
            <div className="max-w-7xl md:max-w-6xl mx-auto mt-32">
                <AddTask dataTestId="addTask"/>
                <TaskListComponent tasks={tasks!}/>
            </div>
        </>
    )
}