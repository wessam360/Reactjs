import { useContext } from "react";
import { createContext } from "react";



export const todoContext  = createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            checked: false,
        }
    ],
    addTodo: (id)=>{},
    deletTodo: (id)=>{},
    updateTodo: (id)=>{},
    toggleComplete: (id)=>{}    
})

export const TodoProvider = todoContext.Provider

export const useTodo = ()=>{
    return(useContext(todoContext));
}
