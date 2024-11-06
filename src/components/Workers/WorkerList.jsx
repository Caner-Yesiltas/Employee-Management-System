import React from 'react';
import Card from '../UI/Card';

const WorkerList = ({workers}) => {
  return (
    <div>
      <Card addClass='mt-10'>
        <ul>
          <li className='flex justify-between'>
            <span className='font-bold'>Name</span>
            <span className='font-bold'>Salary</span>
          </li>

          {workers.map((worker) => (
            <li className='flex justify-between cursor-pointer hover:shadow-md  p-2 transition-all hover:text-red-500'>
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
