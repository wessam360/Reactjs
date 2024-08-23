import { configureStore } from "@reduxjs/toolkit";
import reducers from "./autoslice";
const store = configureStore({
reducers
})