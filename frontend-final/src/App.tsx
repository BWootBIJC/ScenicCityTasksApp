import {Home} from "./pages/Home";
import {APIGateway} from "./apiGateway/APIGateway";
import {APIResponseHandler} from "./apiGateway/APIResponseHandler";
import {TaskGateway} from "./taskAggregate/gateway/TaskGateway";
import {TaskRepository} from "./taskAggregate/repository/TaskRepository";
import {TaskContextProvider} from "./taskAggregate/state/TaskContext";

function App() {
    const apiHandler = new APIResponseHandler();
    const apiGateway = new APIGateway(apiHandler);
    const taskGateway = new TaskGateway(apiGateway);

    return (
        <>
            <TaskContextProvider taskRepo={new TaskRepository(taskGateway)}>
                <Home/>
            </TaskContextProvider>
        </>
    )
}

export default App
