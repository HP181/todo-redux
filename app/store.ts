import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './features/user/userSlice';

const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

// Types for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
