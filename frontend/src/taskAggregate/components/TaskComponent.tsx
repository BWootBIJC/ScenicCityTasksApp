import {Task} from "../domain/Task";

interface ITaskProps {
    task: Task;
} 

export const TaskComponent = ({task}: ITaskProps) => {
    
    
    return (
        <>
            <div className="">
                {task.title}
            </div>
        </>
    )
}