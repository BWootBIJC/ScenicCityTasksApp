import {TaskItemsView} from "../domain/TaskItemsView";
import {TaskComponent} from "./TaskComponent";

interface ITaskListComponentProps {
    tasks: TaskItemsView;
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