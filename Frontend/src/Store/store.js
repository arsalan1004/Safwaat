import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import signReducer from "./signSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    sign: signReducer,
  },
});
