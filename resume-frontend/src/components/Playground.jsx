import React from 'react'

const Playground = () => {
  return (
   <>
   <div className='main'>
    <div className='flex flex-col justify-center items-center'>
      <label htmlFor="file">
        Upload your file here
      </label>
      <input type="file" required  className='cursor-pointer'/>
    </div>
   </div>
   
   </>
  )
}

export default Playground
