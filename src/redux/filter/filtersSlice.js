import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialFilterState,
  reducers: {
    changefilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changefilter } = filtersSlice.actions;

export const filterReducer = filtersSlice.reducer;
