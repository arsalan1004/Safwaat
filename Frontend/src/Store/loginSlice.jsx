import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
  isAuthenticated: false, 
};

export const loginSlice = createSlice({
  name: 'loginCred',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    authenticate: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { setUsername, setPassword, authenticate, logout } = loginSlice.actions;

export const selectUsername = (state) => state.loginCred.username;
export const selectPassword = (state) => state.loginCred.password;
export const selectIsAuthenticated = (state) => state.loginCred.isAuthenticated;

export default loginSlice.reducer;
