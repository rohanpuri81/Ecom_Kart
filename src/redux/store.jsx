import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import LogOutSliceReducer from "./LogOut_Slice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    logOutBtn: LogOutSliceReducer,
  },
});
