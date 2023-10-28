import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products/product-slice';
import blogsReducer from './blogs/blogSlice';
import videosReducer from './videos/videoSlice';
import faqsReducer from './faqs/faqSlice';
import categoryReducer from './category/categorySlice';
import addBannerReducer from './add-banner/addBannerSlice';
import subscriberReducer from './subscribe/subscribeSlice';
// ...
const store = configureStore({
  reducer: {
    product: productReducer,
    blogs: blogsReducer,
    videos: videosReducer,
    faqs: faqsReducer,
    category: categoryReducer,
    banner: addBannerReducer,
    subscribers: subscriberReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
