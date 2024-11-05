import React from 'react';

const AddWorker = () => {
  return (
    <form className='flex flex-col gap-y-2' >
      <label htmlFor='name'>Worker Name</label>
      <input type='text' placeholder='Enter employee name' id='name'/>

      <label htmlFor='wage'>Salary</label>
      <input type='text' placeholder='Enter your salary' id='wage' />

      <button> Add </button>
    </form>
  );
};

export default AddWorker;
