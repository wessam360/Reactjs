import { configureStore } from "@reduxjs/toolkit";
import reducer from "./autoslice";
 const store = configureStore({
reducer
})

export default store