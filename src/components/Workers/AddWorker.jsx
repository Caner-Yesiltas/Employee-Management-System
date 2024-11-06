import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddWorker = () => {
  const [enteredWorkerName, setEnteredWorkerName] = useState('');

  const [enteredWAGE, setEnteredWage] = useState('');

  const minimumWage = 5000;

  // const workerNameChangeHandler = (e) => {
  //   setEnteredWorkerName(e.target.value);
  // };

  // const wageChangeHandler = (e) => {
  //   setEnteredWage(e.target.value);
  // };

  const addWorkerHandler = (e) => {
    e.preventDefault();

    if (
      enteredWorkerName.trim().length === 0 ||
      enteredWAGE.trim().length === 0
    ) {
      return;

      // If inputs are empty -> keep inputs as they are, don't clear
      // If inputs have values -> clear the inputs
    }

    if (+enteredWAGE < minimumWage) {
      return;
      // The "+" converts string to number (even if input type is number, value comes as string)
      // Example: "5000" -> 5000
      // Why? Because all input values are treated as strings by default in JavaScript
      // So we need to convert it to do math operations (like comparison with minimumWage)
    }

    setEnteredWorkerName('');
    setEnteredWage('');

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
          onChange={(e) => setEnteredWorkerName(e.target.value)}
          value={enteredWorkerName}
        />

        <label htmlFor='wage'>Salary</label>
        <input
          type='number'
          className='max-w-[40rem] w-full mx-auto border p-2'
          placeholder='Enter your salary'
          id='wage'
          onChange={(e) => setEnteredWage(e.target.value)}
          value={enteredWAGE}
        />

        <Button className='mt-3' type='submit'>
          Add
        </Button>
      </form>
    </Card>
  );
};

export default AddWorker;
