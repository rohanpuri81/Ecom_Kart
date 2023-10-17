import { configureStore } from "@reduxjs/toolkit";
import LogOutSliceReducer from "./SLICES/LogOut_Slice";

export const store = configureStore({
  reducer: {
    logOutBtn: LogOutSliceReducer,
  },
});
