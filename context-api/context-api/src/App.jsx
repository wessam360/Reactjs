import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/usercontextprovider'
import Login from './components/login'
import Profile from './components/profile'

function App() {

  return (


  <UserContextProvider>
    <h1 className=' text-3xl text-center mt-14 mb-10 bg-gray-500 p-6'>I am Learning Context Api</h1>
  <div className=' bg-slate-600 text-center p-10'>
    <Login/>
    <Profile/>
  </div>
  </UserContextProvider>
  )
}

export default App
