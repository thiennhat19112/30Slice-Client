import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct(state, action)  {
      const product = action.payload;
      const index = state.findIndex((item) => item._id === product._id);
      if (index === -1) {
        state.push(product);
      } else {
        state[index].Quantity += 1;
      }
    },
    removePost(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

const { actions, reducer } = CartSlice;
export const { addProduct, removePost } = actions;
export default reducer;
