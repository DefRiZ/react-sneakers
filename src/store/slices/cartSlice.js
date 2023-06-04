import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    items: [],
    totalPrice: 0,
    tax: 0,
  },
  reducers: {
    changeDrawer(state) {
      state.isOpen = !state.isOpen;
    },
    addItem(state, action) {
      const findObj = state.items.find((obj) => obj.id === action.payload.id);

      if (findObj) {
        state.items.push({ ...action.payload, id: Math.random() * 100 });
      } else {
        state.items.push(action.payload);
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price;
      }, 0);
      console.log(state.totalPrice);
      state.tax = Math.floor((state.totalPrice / 100) * 5);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price;
      }, 0);
      state.tax = Math.floor((state.totalPrice / 100) * 5);
    },
  },
});

export const { changeDrawer, addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
