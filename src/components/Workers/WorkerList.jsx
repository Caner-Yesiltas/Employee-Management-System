import React from 'react';
import Card from '../UI/Card';

const WorkerList = ({ workers, setWorkers }) => {
  const deleteWorker = (id) => {
    setWorkers(
      //for delete
      workers.filter((item) => item.id !== id),
    );
  };
  return (
    <div>
      <Card addClass='mt-10'>
        <ul>
          <li className='flex justify-between'>
            <span className='font-bold'>Name</span>
            <span className='font-bold'>Salary</span>
          </li>

          {workers.map((worker) => (
            <li
              onClick={() => deleteWorker(worker.id)}
              key={worker.id}
              className='flex justify-between cursor-pointer hover:shadow-md  p-2 transition-all hover:text-red-500'
            >
              {/* send id to deleteworker function deleterWorker(worker.id) */}

              <span> {worker.name}</span>
              <span className='font-medium'>{worker.wage}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default WorkerList;
