import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodo = createAsyncThunk("get/getTodo" , async ()=> {
    const response = await axios.get("https://api.escuelajs.co/api/v1/users")
    return [...response.data]
} )

const todoSlice = createSlice({
    name : 'todo',
    initialState :{
        data : [] ,
        isLoading : false ,
        error : "" ,
        activeId : null
    },
    reducers : {
        onChangeTheActiveId : (state , action) =>  {
            state.activeId = action.payload
        }
    },
    extraReducers :(builder)=>{
        builder.addCase(getTodo.pending , (state , action) => {
            state.isLoading = true 
            state.error = ""
            console.log("loading ...")
        })
        
        builder.addCase(getTodo.fulfilled ,(state , action) => {
            state.isLoading = false ;
            state.data = action.payload
            state.error = "" 
            console.log("success")
        })
        builder.addCase(getTodo.rejected , (state , action) => {
            state.isLoading = false ;
            state.error = "error"
            console.log("failed")
        })
    },
})


export const todoSliceActions = todoSlice.actions ;
export default todoSlice ;