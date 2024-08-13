import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    console.log(useParams());
    const {userid} = useParams();

  return (

    <div className=' bg-gray-700 text-white text-5xl text-center p-8'>
user:{userid}
    </div>
  )
}
