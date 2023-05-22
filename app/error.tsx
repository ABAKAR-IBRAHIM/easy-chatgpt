'use client'
import React from 'react'

 const error = ({error,reset}:{error:Error,reset:()=>void}) => {
  return (
    <div className='text-white grid  place-items-center  pt-56 '>
    <h2 className='p-6'>{error.message}</h2>
    <button className=' text-lg  bg-white text-black decoration-5' onClick={() => reset()}>Try again</button>
  </div>

  )
}

export default error
