import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

export const LogOut_Slice = createSlice({
  name: "LogOut",
  initialState,
  reducers: {
    setBtnShow(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setBtnShow } = LogOut_Slice.actions;
export default LogOut_Slice.reducer;
