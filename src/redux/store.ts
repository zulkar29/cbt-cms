import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products/product-slice';
import blogsReducer from './blogs/blogSlice';
import videosReducer from './videos/videoSlice';
// ...
const store = configureStore({
  reducer: {
    product: productReducer,
    blogs: blogsReducer,
    videos: videosReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
