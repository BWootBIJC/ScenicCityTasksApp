﻿import {Input} from "../../ui/Input";
import {TextArea} from "../../ui/TextArea";
import {Button} from "../../ui/Button";
import {useContext, useState} from "react";
import {TaskContext} from "../state/TaskContext";
import {Task} from "../domain/Task";
import {ITaskRepository} from "../repository/ITaskRepository";

interface IAddTaskProps {
    dataTestId: string;
    taskRepo: ITaskRepository;
}

export const AddTask = ({dataTestId, taskRepo}: IAddTaskProps) => {
    const taskContext = useContext(TaskContext);
    const [task, setTask] = useState<Task>(new Task(0, "", ""));

    return (
        <>
            <div className="add-task-background">
                <h1 className="add-task-title" role="h1">Add Task</h1>
                <div className="flex justify-between items-center"
                     data-testid={dataTestId}>
                    <div className="flex flex-col space-y-5 w-96">
                        <Input
                            dataTestId="input"
                            placeholderText="Title"
                            value={task.title}
                            onChange={(e) => setTask(task => task.SetTitle(e.target.value))}
                        />
                        <TextArea
                            placeholderText="Description..."
                            dataTestId="textArea"
                            value={task.description}
                            onChange={(e) => setTask(task => task.SetDescription(e.target.value))}
                        />
                    </div>
                    <Button
                        onClick={() => {
                            taskRepo.AddTask(task)
                                .then((id) => {
                                    return taskContext?.setTasks((tasks) => {
                                        try {
                                            return tasks?.AddTask(id, task);
                                        } catch (e: any) {
                                            alert(e.message);
                                            console.log(e);
                                            return tasks;
                                        }
                                    });
                                })
                                .catch(e => alert(e.message))
                            setTask(task => task.EmptyFields());
                        }}
                        buttonText="Add Task"
                        dataTestId="button"
                    />
                </div>
            </div>
        </>
    )
}