import { useState } from 'react'

import { Provider } from 'react-redux';
import { store } from './app/store';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import "./App.css"
function App() {
  return (
<>
   <TodoForm/>
   <Todo/>
</>

  )
}

export default App
