import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
  isAuthenticated: false, 
  id:""
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
    setId: (state,action) => {
      state.id = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { setUsername, setPassword, authenticate, logout,setId } = loginSlice.actions;

export const selectUsername = (state) => state.loginCred.username;
export const selectPassword = (state) => state.loginCred.password;
export const selectIsAuthenticated = (state) => state.loginCred.isAuthenticated;

export default loginSlice.reducer;
