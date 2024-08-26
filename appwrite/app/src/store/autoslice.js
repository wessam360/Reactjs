import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login(state,action){
            state.status = true,
            state.userData = action.payload.userData
        },
        logout(status,action){
            status.status = false,
            status.userData = action.payload.userData
        }
    }

}
)                                   
export  const {login,logout}  =  authSlice.actions
export default authSlice.reducer