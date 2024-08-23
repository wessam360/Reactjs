import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import conf from './conf/conf'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth";
import { login, logout } from './store/autoslice'

function App() {
 const [loading,setloading] = useState(true)
 const dispatch = useDispatch()
useEffect(() => {
  authService.getCurrentUser()
  .then((userData)=>{
if(userData){
  dispatch(login({userData}))
}
else{
  dispatch(logout())
}
  })
  .catch((err)=>{
   throw err 
  })
  .finally(()=>{
    setloading(false)
  })
}, [])

  return !loading? (
    <div className='min-h-screen flex
    flex-wrap content-between bg-gray-400'></div>
    
  ) : (null)
}

export default App
