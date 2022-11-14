import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
import Categories from './CategoriesSlice';
 const store = configureStore({
  reducer: {
    cart: CartSlice,
    categories: Categories
   
  },
});
console.log(store.getState());

export default store;