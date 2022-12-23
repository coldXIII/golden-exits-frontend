import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { postsReducer } from './slices/posts';
import { commentReducer } from './slices/comment';
import { productsReducer } from './slices/products';
import { authReducer } from './slices/auth';
import { videoReducer } from './slices/videos';
import { cartReducer } from './slices/cart';

const rootReducer = combineReducers({
  posts: postsReducer,
  comment:commentReducer,
  products: productsReducer,
  auth: authReducer,
  videos: videoReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
