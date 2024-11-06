import { useState } from 'react';
import AddWorker from './components/Workers/AddWorker';
import WorkerList from './components/Workers/WorkerList';
import './styles/App.css';

function App() {

  const [workers, setWorkers] = useState([])

  
  return (
    <div className='App text-base font-serif '>
      <h1 className='text-black font-bold text-center mt-5 text-2xl'>
        Salary Automation
      </h1>

      <AddWorker setWorkers={setWorkers}  />
      <WorkerList workers={workers} />
    </div>
  );
}

export default App;
