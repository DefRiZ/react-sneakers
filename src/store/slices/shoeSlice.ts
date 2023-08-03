import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { CartItem } from "./cartSlice";

interface FetchArgs {
  searchValue: string;
}

export const fetchShoes = createAsyncThunk(
  "shoes/fetchShoes",
  async (params: FetchArgs) => {
    const { searchValue } = params;
    const { data } = await axios.get<CartItem[]>(
      `https://647735539233e82dd53b26d5.mockapi.io/items?${searchValue}`
    );
    return data as CartItem[];
  }
);

interface initialStateArgs {
  itemsFetch: CartItem[];
  status: "loading" | "complete" | "error";
}

const initialState: initialStateArgs = {
  itemsFetch: [],
  status: "loading",
};

const shoeSlice = createSlice({
  name: "shoe",
  initialState,
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

export default shoeSlice.reducer;
