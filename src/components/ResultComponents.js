import React, { useState } from 'react'

export const ResultComponents = ({subject,hour}) => {
const [hr,sethr]=useState(hour);

const incrment=()=>{
  sethr(hr+1);
}
const decrement=()=>{
  sethr(hr-1);
  if(hr===0){
    sethr(0)
  }
}

  return (
    <div className='w-screen  bg-red-200 h-20 xl:w-1/2 xl:m-auto xl:my-3 xl:flex justify-center items-center rounded-lg'>
        <h1 className='font-bold'>{subject} - {hr}hrs </h1>
        <button className='bg-green-500 p-2 m-2 w-15 rounded-lg font-bold' onClick={incrment}>+</button>
        <button className='bg-red-500 p-2 m-2 w-15 rounded-lg font-bold' onClick={decrement}>-</button>
    </div>
  )
}
