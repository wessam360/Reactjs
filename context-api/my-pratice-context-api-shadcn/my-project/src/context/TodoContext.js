import { createContext, useContext } from "react";



   const  todoContext = createContext([
        {
            todos:"sample message",
            completed:"false",
            id:Date.now()

        }
    ])

    const TodoProvider = todoContext.Provider;

    const useTodo = ()=>{
        return(useContext(todoContext))
    }

export {useTodo,TodoProvider,todoContext}