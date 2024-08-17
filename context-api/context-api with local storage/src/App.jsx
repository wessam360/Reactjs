import { useEffect, useState } from 'react'
import './App.css'
import  {TodoProvider}  from "./context/index"
import { TodoForm,TodoItem } from "./components/index";
import { data } from 'autoprefixer'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (newTodo)=>{

    setTodos((prevTodos)=>[{...newTodo,id:Date.now(),checked:false},...prevTodos])
  }

  const updateTodo = (id,newTodo)=>{
    setTodos((prevTodos)=>prevTodos.map((prevTodo)=>(
      (prevTodo.id === id)? newTodo : prevTodo)))
  }

  const deleteTodo = (id)=>{
    setTodos((prevtodos)=>prevtodos.filter((prevTodo)=>prevTodo.id!==id))
  }

  const toggleComplete = (id)=>{

    setTodos(
      (prevTodos)=>prevTodos.map((prevTodo)=>{
      return((prevTodo.id === id)?{...prevTodo,checked:!prevTodo.checked}:prevTodos )
    })
    )
  }
    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem("todos"))
  
      if (todos && todos.length > 0) {
        setTodos(todos)
      }
    }, [])
  
    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

  return (
    <>
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}} >
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                          todos.map((todo)=>{
                            return(
                            <div key={todo.id} className='w-full'>
                              <TodoItem todo={todo}/>
                            </div>
                            );
                          })
                        }
                 
                    </div>
                </div>
            </div>
    </TodoProvider>
  </>
  )
}


export default App

