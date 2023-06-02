import React, {createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState} from "react";
import {TaskItemsView} from "../domain/TaskItemsView";
import {ITaskRepository} from "../repository/ITaskRepository";

export interface ITaskContext {
    tasks: TaskItemsView | undefined;
    setTasks: Dispatch<SetStateAction<TaskItemsView | undefined>>;
}

export const TaskContext = createContext<ITaskContext | undefined>({
    tasks: undefined,
    setTasks: () => undefined
});

interface ITaskContextProviderProps {
    children: ReactNode;
    taskRepo: ITaskRepository;
}

export const TaskContextProvider = ({ children, taskRepo }: ITaskContextProviderProps) => {
    const [tasks, setTasks] = useState<TaskItemsView | undefined>();

    useEffect(() => {
        taskRepo.GetAllTasks()
            .then(x => {
                setTasks(new TaskItemsView(x.tasks));
            })
            .catch(e => {
                console.log(e);
                alert(e.message);
            });
    }, []);
    
    return (
        <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}