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
    removeProduct(state, action) {
      const id = action.payload;
      const index = state.findIndex((item) => item._id === id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    updateProduct(state, action) {
      const product = action.payload;
      const index = state.findIndex((item) => item._id === product._id);
      if (index !== -1) {
        state[index].Quantity = product.Quantity;
      }
    }
  },
});

const { actions, reducer } = CartSlice;
export const { addProduct, removeProduct,updateProduct } = actions;
export default reducer;
