import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: number | null;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    removeAll: (state) => {
      state.users = [];
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(u => u.id !== action.payload);
    },
    editUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(u => u.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});

export const { add, removeAll, removeUser, editUser } = userSlice.actions;
export default userSlice.reducer;
