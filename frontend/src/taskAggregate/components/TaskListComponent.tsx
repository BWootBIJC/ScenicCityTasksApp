import {TaskItemsView} from "../domain/TaskItemsView";
import {TaskComponent} from "./TaskComponent";
import {TaskRepository} from "../repository/TaskRepository";
import {APIResponseHandler} from "../../apiGateway/APIResponseHandler";
import {APIGateway} from "../../apiGateway/APIGateway";
import {TaskGateway} from "../gateway/TaskGateway";

interface ITaskListComponentProps {
    tasks: TaskItemsView;
}

export const TaskListComponent = ({tasks}: ITaskListComponentProps) => {
    const apiHandler = new APIResponseHandler();
    const apiGateway = new APIGateway(apiHandler);
    const taskGateway = new TaskGateway(apiGateway);
    
    return (
        <>
            <div data-testid="taskList">
                {tasks.tasks.map(x => {
                    return <TaskComponent key={x.id} task={x} taskRepo={new TaskRepository(taskGateway)}/>
                })}
            </div>
        </>
    )
}