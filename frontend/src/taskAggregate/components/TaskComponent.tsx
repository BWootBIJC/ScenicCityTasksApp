import {Task} from "../domain/Task";
import {TaskDescription} from "./TaskDescription";
import {Button} from "../../ui/Button";

interface ITaskProps {
    task: Task;
}

export const TaskComponent = ({task}: ITaskProps) => {


    return (
        <>
            <div className="flex justify-between p-10 bg-slate-100 dark:bg-slate-800 rounded-lg mb-20">
                <div>
                    <TaskDescription
                        dataTestId="taskDescription"
                        title={task.name}
                        description={task.description}
                    />
                </div>
                <div>
                    <Button
                        buttonText="Remove Task"
                        dataTestId="removeButton"
                    />
                </div>
            </div>
        </>
    )
}