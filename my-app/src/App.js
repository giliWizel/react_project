import logo from './logo.svg';
import './App.css';
import Login from './component/login'
import Register from './component/client/register/register'
import About from './component/client/about/about';
import { RouteClient } from './component/client/RouteClient'
import Feedback from './component/client/Feedback to the system/Feedback'
import TemporaryWork from './component/client/job application/temporary work/temporaryWork'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import WorkerRouter from './component/worker/WorkerRouter'
import RegisterWorker from './component/worker/register'
function App() {
  return (
    <div className="App">
      <Login></Login>
      {/* <TemporaryWork></TemporaryWork> */}
      {/* <Feedback></Feedback> */}
      {/* <About></About> */}
      {/* <Register></Register> */}
      <Router>
        <WorkerRouter></WorkerRouter>
      </Router>
      <Router>
        <RouteClient></RouteClient>
      </Router>
      {/* <RegisterWorker></RegisterWorker> */}
    </div>
  );
}

export default App;
