import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("get/getUsers", async () => {
  const response = await axios.get("https://dummyjson.com/users");
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: "",
    activeId: null,
  },
  reducers: {
    onChangeTheActiveId: (state, action) => {
      state.activeId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.isLoading = true;
      state.error = "";
      console.log("loading ...");
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = "";
      console.log("success");
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = "error";
      console.log("failed");
    });
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice;
