import {TaskItems} from "../domain/TaskItems";
import {TaskComponent} from "./TaskComponent";

interface ITaskListComponentProps {
    tasks: TaskItems;
}

export const TaskListComponent = ({tasks}: ITaskListComponentProps) => {
    return (
        <>
            <div data-testid="taskList">
                {tasks.tasks.map(x => {
                    return <TaskComponent key={x.id} task={x}/>
                })}
            </div>
        </>
    )
}