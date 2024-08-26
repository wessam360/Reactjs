import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/autoslice'

export default function LogoutBtn() {
    const dispatch = useDispatch()
    const logOutHandler = ()=>{
        //reducer are promises
        authService.logout().then(()=>{
          dispatch(logout)
        }
        )
    }

  return (
<button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
>Logout</button>
  )
}
