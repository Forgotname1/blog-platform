import { configureStore } from '@reduxjs/toolkit';

import postSlice from './postSlice';
import loginSlice from './loginSlice';
const store = configureStore({
  reducer: {
    post: postSlice,
    loginInfo: loginSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
