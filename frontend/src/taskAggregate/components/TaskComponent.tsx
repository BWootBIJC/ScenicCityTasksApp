import {Task} from "../domain/Task";
import {TaskDescription} from "./TaskDescription";
import {Button} from "../../ui/Button";
import {useContext} from "react";
import {TaskContext} from "../state/TaskContext";
import {ITaskRepository} from "../repository/ITaskRepository";
import {APIResponseHandler} from "../../apiGateway/APIResponseHandler";
import {APIGateway} from "../../apiGateway/APIGateway";
import {TaskGateway} from "../gateway/TaskGateway";
import {TaskRepository} from "../repository/TaskRepository";

interface ITaskProps {
    task: Task;
    taskRepo: ITaskRepository;
}

export const TaskComponent = ({task, taskRepo}: ITaskProps) => {
    const apiHandler = new APIResponseHandler();
    const apiGateway = new APIGateway(apiHandler);
    const taskGateway = new TaskGateway(apiGateway);
    const taskContext = useContext(TaskContext);

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
                        onClick={() => {
                            taskContext?.setTasks(taskState => taskState?.RemoveTask(task));
                            taskRepo.DeleteTask(task)
                                .catch(e => alert(e.message))
                        }}
                        buttonText="Remove Task"
                        dataTestId="removeButton"
                    />
                </div>
            </div>
        </>
    )
}