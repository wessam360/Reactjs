import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
       id: 1,
    //    text: "" 
    }]
}

// methods mostly takes object
export const todoSlice = createSlice({
    name : "todo",
    initialState : initialState,
    // initial state can be declared speeratly and on the go
    reducers:{
        // properties:functions
        addTodo:(state,action)=>{
            // state : current value , action : passed data
            const todo = {
                id: nanoid(),
                text: action.payload  
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }
})

// in redux : function is declared and and initialized 
//  in context api , function in ony declraed
export const {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer
