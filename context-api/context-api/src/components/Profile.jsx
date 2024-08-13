import React, { useContext } from 'react'
import UserContext from '../context/usercontext'

export default function profile() {
    const {user} = useContext(UserContext);
if(!user) return(<div>Login the User</div>)
return(<div className='text-2xl font-medium'>UserName : {user.username}<br/> Password : {user.password}</div>)
}
