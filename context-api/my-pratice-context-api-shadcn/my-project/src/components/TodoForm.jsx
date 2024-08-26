import React, { useState } from 'react'

export default function () {
  const [todo,settodo] = useState("")
  const add = (e) =>{
    e.preventDefault();
  }
  return (
    
 <div className=' '>

      <form action="" className="" onSubmit={add}>
       <input type="text"
       placeholder='Enter Your Todo'
       value={todo}
       onChange={(e)=>settodo(e.target.value)}
        />
        <button onClick={add}>
          Submit
        </button>
       
    </form>
    </div>
  )
}
