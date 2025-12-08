import React, { useState } from 'react'

const Playground = () => {
  const [mode,setMode] = useState(true)
  const handleClick = (prev)=>{
console.log(prev.target)
  }
 
  return (
    <div>
     <button onClick={handleClick}>upload</button>
     <button>text</button>
    </div>
  )
}

export default Playground
