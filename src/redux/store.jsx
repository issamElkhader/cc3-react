import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./TodoSlice";
import userSlice from "./UserSlice";

const store = configureStore({
    reducer : {
        users : userSlice.reducer ,
        todo : todoSlice.reducer 
    }
})
export default store ;