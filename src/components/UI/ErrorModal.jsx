import React from 'react'
import Button from './Button'
import Card from './Card'

const ErrorModal = () => {
  return (
    <div className='fixed top-1/4 left-0 flex justify-center mx-auto w-full'>
    <Card className="w-[36rem]"> 
     <header>
        <h2>Name is require </h2>
     </header>
     <section>
        Please enter name
     </section>
     <footer>
        <Button> </Button>
     </footer>
    </Card>
    </div>
  )
}

export default ErrorModal
