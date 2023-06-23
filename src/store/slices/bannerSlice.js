import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    currentSlide: 0,
  },
  reducers: {
    setCurrentSlide(state, action) {
      state.currentSlide = action.payload;
    },
  },
});

export const { setCurrentSlide } = bannerSlice.actions;

export default bannerSlice.reducer;
