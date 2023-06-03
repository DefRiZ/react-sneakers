import { configureStore } from "@reduxjs/toolkit";
import shoeSlice from "./slices/shoeSlice";

export const store = configureStore({
  reducer: { shoes: shoeSlice },
});
