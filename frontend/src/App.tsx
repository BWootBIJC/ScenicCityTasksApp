import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Home} from "./pages/Home";
import {APIGateway} from "./apiGateway/APIGateway";
import {APIResponseHandler} from "./apiGateway/APIResponseHandler";
import {TaskGateway} from "./taskAggregate/gateway/TaskGateway";
import {TaskRepository} from "./taskAggregate/repository/TaskRepository";

function App() {
    const apiHandler = new APIResponseHandler();
    const apiGateway = new APIGateway(apiHandler);
    const taskGateway = new TaskGateway(apiGateway);

  return (
    <>
      <Home repo={new TaskRepository(taskGateway)}/>
    </>
  )
}

export default App
