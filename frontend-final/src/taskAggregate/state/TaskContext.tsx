import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState} from "react";
import {TaskItemsView} from "../domain/TaskItemsView";
import {ITaskRepository} from "../repository/ITaskRepository";
import {ServiceCollectionContext} from "../../serviceProvider/ServiceCollectionProvider";

export interface ITaskContext {
    tasks: TaskItemsView | undefined;
    setTasks: Dispatch<SetStateAction<TaskItemsView | undefined>>;
}

export const TaskContext = createContext<ITaskContext>({
    tasks: undefined,
    setTasks: () => undefined
});

interface ITaskContextProviderProps {
    children: ReactNode;
}

export const TaskContextProvider = ({children}: ITaskContextProviderProps) => {
    const [tasks, setTasks] = useState<TaskItemsView | undefined>();
    const {TaskService} = useContext(ServiceCollectionContext);


    useEffect(() => {
        TaskService.getAllTasks()
            .then(x => {
                setTasks(new TaskItemsView(x.tasks));
            })
            .catch(e => {
                console.log(e);
                alert(e.message);
            });
    }, []);

    if (!tasks) {
        return (
            <>
                {/*This could be any kind of global loading state*/}
            </>
        )
    }

    return (
        <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}