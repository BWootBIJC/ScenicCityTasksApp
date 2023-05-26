import {TaskListComponent} from "../taskAggregate/components/TaskListComponent";
import React, {useContext} from "react";
import {AddTask} from "../taskAggregate/components/AddTask";
import {TaskContext} from "../taskAggregate/state/TaskContext";
export const Home = () => {
    const taskContext = useContext(TaskContext);

    if(!taskContext?.tasks) {
        return <></>
    }
    
    return (
        <>
            <div className="max-w-7xl mx-auto mt-32">
                <AddTask dataTestId="addTask"/>
                <TaskListComponent tasks={taskContext?.tasks}/>
            </div>
        </>
    )
}