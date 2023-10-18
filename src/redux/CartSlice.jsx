import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_CART(state, action) {
      const ItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (ItemIndex >= 0) {
        state.cart[ItemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          cart: [...state.cart, temp],
        };
      }
    },
    RMV_CART(state, action) {
      return {
        ...state,
        cart: state.cart.filter((e) => e.id != action.payload),
      };
    },

    REM_IND(state, action) {
      const ItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ItemIndex >= 0 && state.cart[ItemIndex].qnty > 0) {
        state.cart[ItemIndex].qnty -= 1;
      } else {
        return {
          ...state,
        };
      }
    },
    REM_ALL(state, action) {
      return {
        ...state,
        cart: [],
      };
    },
  },
});

export const { ADD_CART, RMV_CART, REM_IND, REM_ALL } = CartSlice.actions;
export default CartSlice.reducer;
