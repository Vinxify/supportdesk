import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../features/auth/authSlice";
import authReducer from "../features/auth/authSlice";
import ticketReducer from "../features/ticket/ticketSlice";

// console.log(authReducer);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ticket: ticketReducer,
  },
});

console.log(store.getState());
