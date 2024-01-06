import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  gender: '',
  dateOfBirth: '',
  rememberMe: false,
  agreeToTerms: false,
  details:"",
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setDateOfBirth: (state, action) => {
      state.dateOfBirth = action.payload;
    },
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
    },
    setAgreeToTerms: (state, action) => {
      state.agreeToTerms = action.payload;
    },
    setdetails: (state, action) => {
        state.details = action.payload;
      },
  },
});

export const {
  setFirstName,
  setLastName,
  setEmail,
  setUsername,
  setPassword,
  setConfirmPassword,
  setGender,
  setDateOfBirth,
  setRememberMe,
  setAgreeToTerms,
  setdetails,
} = signUpSlice.actions;

export const selectSignUp = (state) => state.signUp;

export default signUpSlice.reducer;
