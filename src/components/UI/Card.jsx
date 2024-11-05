import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-green-200 p-5 rounded-xl  '  >
      {props.children}
    </div>
  )
}

export default Card
