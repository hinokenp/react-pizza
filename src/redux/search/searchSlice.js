import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
