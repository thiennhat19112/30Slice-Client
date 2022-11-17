import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name : "user",
    initialState : {
        isLogin : false,
        info : []
    },
   reducers : {
    
   }
})

const { actions, reducer } = UserSlice;
export const { } = actions;
export default reducer