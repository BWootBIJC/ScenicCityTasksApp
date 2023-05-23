import {Task} from "../domain/Task";

interface ITaskProps {
    task: Task;
}

export const TaskComponent = ({task}: ITaskProps) => {


    return (
        <>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </>
    )
}