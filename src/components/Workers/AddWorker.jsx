import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddWorker = () => {
  return (
    <Card addClass='mt-10 bg-blue-500'>
      <form className='flex flex-col gap-y-2'>
        <label htmlFor='name' className='font-medium'>
          Worker Name
        </label>
        <input
          type='text'
          className='max-w-[40rem] w-full mx-auto border p-2'
          placeholder='Enter employee name'
          id='name'
        />

        <label htmlFor='wage'>Salary</label>
        <input
          type='text'
          className='max-w-[40rem] w-full mx-auto border p-2'
          placeholder='Enter your salary'
          id='wage'
        />

        <Button className='mt-3' >
            
            Add</Button>
      </form>
    </Card>
  );
};

export default AddWorker;
