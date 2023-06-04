import { configureStore } from "@reduxjs/toolkit";
import shoeSlice from "./slices/shoeSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: { shoes: shoeSlice, cart: cartSlice },
});
