import {Task} from "../domain/Task";
import {TaskDescription} from "./TaskDescription";
import {Button} from "../../ui/Button";
import {useContext} from "react";
import {TaskContext} from "../state/TaskContext";

interface ITaskProps {
    task: Task;
}

export const TaskComponent = ({task}: ITaskProps) => {
    const taskContext = useContext(TaskContext);

    return (
        <>
            <div className="flex justify-between p-10 shadow-2xl shadow-black bg-slate-100 dark:bg-slate-800 rounded-3xl mb-20">
                <div>
                    <TaskDescription
                        dataTestId="taskDescription"
                        title={task.name}
                        description={task.description}
                    />
                </div>
                <div>
                    <Button
                        onClick={() => taskContext?.setTasks(taskState => taskState?.RemoveTask(task))}
                        buttonText="Remove Task"
                        dataTestId="removeButton"
                    />
                </div>
            </div>
        </>
    )
}