import { createSlice } from "@reduxjs/toolkit";

interface filterSliceState {
  search: string;
}

const initialState: filterSliceState = {
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = filterSlice.actions;

export default filterSlice.reducer;
