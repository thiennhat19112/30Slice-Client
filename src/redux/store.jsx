import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
 const store = configureStore({
  reducer: {
    cart: CartSlice
   
  },
});
console.log(store);

export default store;