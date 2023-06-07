import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchShoes = createAsyncThunk("shoes/fetchShoes", async () => {
  const { data } = await axios.get(
    "https://647735539233e82dd53b26d5.mockapi.io/items"
  );
  return data;
});

const shoeSlice = createSlice({
  name: "shoe",
  initialState: {
    itemsFetch: [],
    status: "loading", // "loading", "complete", "error"
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShoes.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchShoes.fulfilled, (state, action) => {
      state.status = "complete";
      state.itemsFetch = action.payload;
    });
    builder.addCase(fetchShoes.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const { status } = shoeSlice.actions;
export default shoeSlice.reducer;
