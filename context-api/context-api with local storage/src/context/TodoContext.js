import { useContext } from "react";
import { createContext } from "react";



const todoContext  = createContext({
    todos : [
        {
            id : 1,
            todo : "todo msg",
            checked : false,
        }
    ],
    addTodo : (id)=>{},
    deletTodo : (id)=>{},
    toggleComplete : (id)=>{}    
})

const TodoProvider = themeContext.Provider

const useTodo = ()=>{
    return(useContext(todoContext));
}