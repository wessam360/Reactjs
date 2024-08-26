import React, { useContext, useState } from 'react'
import UserContext from '../context/usercontext'

export default function login() {
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");
    const {setuser} = useContext(UserContext);
    const handleSubmit = (e)=>{
e.preventDefault();
        setuser({username,password})
    }
  return (
    <div className='m-2 p'>
        <input type=" m-2 text"
        className=' placeholder:text-center'
        placeholder='Enter Name'
        value={username}
        onChange={(e)=>setusername(e.target.value)} />
<br />
        <input type="password"
        className='m-2 placeholder:text-center'
        placeholder='Enter Password'
        value={password}
        onChange={(e)=>setpassword(e.target.value)} />
        <br />
        <button className='border p-1 font-semibold rounded-lg ' onClick={handleSubmit}>Submit</button>
    </div>
  )
}
