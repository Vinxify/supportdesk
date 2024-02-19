import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../features/auth/authSlice";
import authReducer from "../features/auth/authSlice";
import ticketReducer from "../features/ticket/ticketSlice";
import notesReducer from "../features/notes/noteSlice";

// console.log(authReducer);

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ticket: ticketReducer,
    notes: notesReducer,
  },
});

console.log(store.getState());
