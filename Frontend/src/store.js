import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/loginSlice'
import signReducer from './features/signSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    sign: signReducer,
  },
})