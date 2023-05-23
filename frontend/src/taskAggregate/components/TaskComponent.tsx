import { Task } from "../domain/Task.ts";

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