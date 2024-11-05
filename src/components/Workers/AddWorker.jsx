import React from 'react';

const AddWorker = () => {
  return (
    <form className='flex flex-col gap-y-2' >
      <label htmlFor='name' className='font-medium'  >Worker Name</label>
      <input type='text'  className='max-w-[40rem] w-full mx-auto border p-2'  placeholder='Enter employee name' id='name'/>
 
      <label htmlFor='wage'>Salary</label>
      <input  type='text'  className='max-w-[40rem] w-full mx-auto border p-2'   placeholder='Enter your salary' id='wage' />

      <button className='p-2 text-lg bg-teal-700 text-white mt-2 '  > Add </button>
    </form>
  );
};

export default AddWorker;
