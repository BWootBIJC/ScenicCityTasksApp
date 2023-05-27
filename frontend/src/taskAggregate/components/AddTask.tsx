import {Input} from "../../ui/Input";
import {TextArea} from "../../ui/TextArea";
import {Button} from "../../ui/Button";
import {useContext, useState} from "react";
import { TaskContext } from "../state/TaskContext";
import {Task} from "../domain/Task";

interface IAddTaskProps {
    dataTestId: string;
}

export const AddTask = ({ dataTestId }: IAddTaskProps) => {
    const taskContext = useContext(TaskContext);
    const [task, setTask] = useState<Task>(new Task(1, "", ""));
    
    return (
        <>
            <div className="p-10 bg-slate-300 rounded-3xl shadow-2xl shadow-black mb-20">
                <h1 className="mb-7 text-zinc-950" role="h1">Add Task</h1>
                <div className="flex justify-between items-center"
                    data-testid={dataTestId}>
                    <div className="flex flex-col space-y-5 w-96">
                        <Input 
                            dataTestId="input"
                            placeholderText="Title" 
                            value={task.name}
                            onChange={(e) => setTask(task => task.SetName(e.target.value))} 
                        />
                        <TextArea 
                            placeholderText="Description..." 
                            dataTestId="textArea"
                            value={task.description}
                            onChange={(e) => setTask(task => task.SetDescription(e.target.value))}
                        />
                    </div>
                    <Button
                        onClick={() => taskContext?.setTasks(tasks => tasks?.AddTask(task))}
                        buttonText="Add Task"
                        dataTestId="button"
                    />
                </div>
            </div>
        </>
    )
}