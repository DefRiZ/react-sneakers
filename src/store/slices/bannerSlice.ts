import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface bannerSliceState {
  currentSlide: number;
}

const initialState: bannerSliceState = {
  currentSlide: 0,
};

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    setCurrentSlide(state, action: PayloadAction<number>) {
      state.currentSlide = action.payload;
    },
  },
});

export const { setCurrentSlide } = bannerSlice.actions;

export default bannerSlice.reducer;
