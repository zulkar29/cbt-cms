import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../redux/products/product-slice';
// ...
const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
