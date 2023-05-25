import {TaskListComponent} from "../taskAggregate/components/TaskListComponent";
import {useEffect, useState} from "react";
import {TaskItems} from "../taskAggregate/domain/TaskItems";
import {ITaskRepository} from "../taskAggregate/repository/ITaskRepository";

interface IHomePageProps {
    repo: ITaskRepository
}

export const Home = ({repo}: IHomePageProps) => {
    const [tasks, setTasks] = useState<TaskItems | undefined>(undefined);

    useEffect(() => {
        repo.GetAllTasks()
            .then(x => {
                setTasks(x)
            })
            .catch(e => {
                console.log(e)
                alert(e.message)
            });
    }, []);


    if (!tasks) {
        return (
            <>
                <p>Tasks Loading...</p>
            </>
        )
    }

    return (
        <>
            <div className="max-w-7xl mx-auto mt-32">
                <TaskListComponent tasks={tasks}/>
            </div>
        </>
    )
}