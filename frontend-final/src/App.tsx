import {Home} from "./pages/Home";
import {TaskContextProvider} from "./taskAggregate/state/TaskContext";
import {ServiceCollectionProvider} from "./serviceProvider/ServiceCollectionProvider";

function App() {

    return (
        <ServiceCollectionProvider>
            <TaskContextProvider>
                <Home/>
            </TaskContextProvider>
        </ServiceCollectionProvider>
    )
}

export default App
