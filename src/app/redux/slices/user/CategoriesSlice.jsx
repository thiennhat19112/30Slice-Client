import { createSlice } from "@reduxjs/toolkit";

const CategoriesSlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {
    addCategory(state, action) {
      action.payload.forEach((item) => {
        state.push(item);
      });
    },
  },
});

const { actions, reducer } = CategoriesSlice;
export const { addCategory } = actions;
export default reducer;
