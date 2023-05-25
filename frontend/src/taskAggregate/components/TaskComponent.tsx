import {Task} from "../domain/Task";
import {TaskDescription} from "./TaskDescription";

interface ITaskProps {
    task: Task;
}

export const TaskComponent = ({task}: ITaskProps) => {


    return (
        <>
            <div className="flex justify-between p-10 bg-slate-100 dark:bg-slate-800 rounded-lg shadow-lg mb-20">
                <div>
                    <TaskDescription
                        dataTestId="taskDescription"
                        title={task.name}
                        description={task.description}
                    />
                </div>
                <div>
                    <button>Ayy</button>
                </div>
            </div>
        </>
    )
}