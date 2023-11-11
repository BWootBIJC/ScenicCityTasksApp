import {TaskCard} from "../domain/TaskCard";
import {TaskDescription} from "./TaskDescription";
import {Button} from "../../ui/Button";
import {useContext} from "react";
import {TaskContext} from "../state/TaskContext";
import {ITaskRepository} from "../repository/ITaskRepository";
import {APIResponseHandler} from "../../apiGateway/APIResponseHandler";
import {APIGateway} from "../../apiGateway/APIGateway";
import {TaskGateway} from "../gateway/TaskGateway";
import {TaskRepository} from "../repository/TaskRepository";
import {ServiceCollectionContext} from "../../serviceProvider/ServiceCollectionProvider";

interface ITaskProps {
    task: TaskCard;
}

export const TaskComponent = ({task}: ITaskProps) => {
    const { TaskService } = useContext(ServiceCollectionContext);
    const { setTasks } = useContext(TaskContext);
    
    function onRemoveTask() {
        TaskService.deleteTask(task.id)
            .then(data => {
                setTasks(data);
            });
    }
    

    return (
        <>
            <div className="flex justify-between p-10 shadow-2xl shadow-black bg-slate-100 dark:bg-slate-800 rounded-3xl mb-20">
                <div>
                    <TaskDescription
                        dataTestId="taskDescription"
                        title={task.title}
                        description={task.description}
                    />
                </div>
                <div>
                    <Button
                        onClick={onRemoveTask}
                        buttonText="Remove Task"
                        dataTestId="removeButton"
                    />
                </div>
            </div>
        </>
    )
}