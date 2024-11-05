import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button       type={props.type || "button"}
        className={`p-2 text-lg bg-black text-white mt-2 w-full max-w-[40rem] mx-auto  ${props.className} `}
      >
  
        {props.children}
      </button>
    </div>
  );
};

export default Button;
