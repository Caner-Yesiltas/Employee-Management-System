import React from 'react';
import Button from './Button';
import Card from './Card';

const ErrorModal = (props) => {
  return (
    <div className='error-modal'>
      <div onClick={props.onConfirm}  className='backdrop-blur-sm bg-white/30 fixed  w-screen h-screen top-0'> </div>
      <Card addClass='w-[26rem] h-[12rem] z-20 '>
        <header className='bg-blue-300 p-4 text-white  rounded-t-xl '>
          <h2 className='text-center text-xl text-black'> {props.error.title} </h2>
        </header>
        <section className='text-center bg-black-500'>
          {props.error.message}
        </section>
        <footer className='p-4 flex justify-center bg-green-300 rounded-xl'>
          <Button className='w-20'> OK </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
