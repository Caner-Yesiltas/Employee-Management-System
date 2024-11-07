import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const AddWorker = ({ setWorkers }) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState('');
  const [enteredWAGE, setEnteredWage] = useState('');
  const [error, seterror] = useState();
  const minimumWage = 100;
  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (enteredWorkerName.trim().length === 0) {
      seterror({
        title: 'Name is required',
        message: 'Please type your name!',
      });
      return;
    }
    if (+enteredWAGE < minimumWage) {
      seterror({
        title: 'Salary field is required',
        message: `Please enter a salary amount greater than ${minimumWage}!`,
      });
    }
    setEnteredWorkerName('');
    setEnteredWage('');
    setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredWorkerName,
        wage: enteredWAGE,
      },
      ...prevState,
    ]);
    console.log(enteredWorkerName, enteredWAGE);
  };
  const errorHandler = () => {
    seterror(null);
  };
  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
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
          </Button   >
        </form>
      </Card>
    </div>
  );
};
export default AddWorker;
