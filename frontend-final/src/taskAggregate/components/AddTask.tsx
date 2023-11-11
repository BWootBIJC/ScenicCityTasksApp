import {Input} from "../../ui/Input";
import {TextArea} from "../../ui/TextArea";
import {Button} from "../../ui/Button";
import {useContext, useState} from "react";
import {ITaskContext, TaskContext} from "../state/TaskContext";
import {TaskCard} from "../domain/TaskCard";
import {ServiceCollectionContext} from "../../serviceProvider/ServiceCollectionProvider";

interface IAddTaskProps {
    dataTestId: string;
}

export const AddTask = ({dataTestId}: IAddTaskProps) => {
    const [task, setTask] = useState<TaskCard>(new TaskCard(0, "", ""));
    const { TaskService } = useContext(ServiceCollectionContext);
    const { setTasks } = useContext<ITaskContext>(TaskContext);
    
    function onAddTask() {
        TaskService.addTask(task)
            .then((taskItemsView) => {
                setTasks(taskItemsView);
            })
            .then(() => setTask(task => task.emptyFields()))
            .catch(e => alert(e.message));
    }

    return (
        <>
            <div className="add-task-background">
                <h1 className="add-task-title" role="h1">Add Task</h1>
                <div className="flex justify-between items-center"
                     data-testid={dataTestId}>
                    <div className="flex flex-col space-y-5 w-96">
                        <Input
                            dataTestId="input"
                            placeholderText="Title"
                            value={task.title}
                            onChange={(e) => setTask(task => task.setTitle(e.target.value))}
                        />
                        <TextArea
                            placeholderText="Description..."
                            dataTestId="textArea"
                            value={task.description}
                            onChange={(e) => setTask(task => task.setDescription(e.target.value))}
                        />
                    </div>
                    <Button
                        onClick={onAddTask}
                        buttonText="Add Task"
                        dataTestId="button"
                    />
                </div>
            </div>
        </>
    )
}