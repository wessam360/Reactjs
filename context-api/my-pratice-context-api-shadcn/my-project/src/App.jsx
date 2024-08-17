import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';

function App() {

  return (
    <>
      <TodoProvider>
        <div className=" bg-[url('./assets/background.jpg')] w-[100vw] h-[100vh] bg-center">
          <div className=' font-black text-6xl relative top-20 text-center w-[100vw]'>Todo Application</div>
          <TodoForm/>
        </div>
    </TodoProvider>
    </>
  )
}

export default App
