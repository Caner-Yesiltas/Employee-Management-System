import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddWorker = () => {
  const [enteredWorkerName, setEnteredWorkerName] = useState('');

  const [enteredWAGE, setEnteredWage] = useState('');

  const workerNameChangeHandler = (e) => {
    setEnteredWorkerName(e.target.value);
  };

  const wageChangeHandler = (e) => {
    setEnteredWage(e.target.value);
  };

  const addWorkerHandler = (e) => {
    e.preventDefault();

    console.log(enteredWorkerName, enteredWAGE);
  };

  return (
    <Card addClass='mt-10 bg-blue-500'>
      <form className='flex flex-col gap-y-2' onSubmit={addWorkerHandler}>
        <label htmlFor='name' className='font-medium'>
          Worker Name
        </label>
        <input
          type='text'
          className='max-w-[40rem] w-full mx-auto border p-2'
          placeholder='Enter employee name'
          id='name'
          onChange={workerNameChangeHandler}
        />

        <label htmlFor='wage'>Salary</label>
        <input
          type='text'
          className='max-w-[40rem] w-full mx-auto border p-2'
          placeholder='Enter your salary'
          id='wage'
          onChange={wageChangeHandler}
        />

        <Button className='mt-3' type="submit"   >Add</Button>
      </form>
    </Card>
  );
};

export default AddWorker;
