import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
//   const [getdata,setdata] = useState([])
//   useEffect(() => {
// fetch("https://api.github.com/users/wessam360")
// .then((res)=>res.json())
// .then((res)=>setdata(res))
//   },[])
// console.log(getdata);  
const getdata = useLoaderData()
  return (
    <div className=' flex justify-evenly items-center bg-gray-700 text-white p-4 '>
      <img className=' h-36 rounded-full' src={getdata.avatar_url} alt="" />
      <div className=' text-6xl'>Followers : {getdata.followers}</div>
    </div>
  )
}
export async function githubapiinfo(){
 const data = await fetch("https://api.github.com/users/wessam360")
return(data.json())
    }
