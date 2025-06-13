import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: "популярности",
    sortProperty: "rating",
    order: "desc",
  },
};

export const sortSlice = createSlice({
  name: "sortSlice",
  initialState,
  reducers: {
    changeSortType: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeSortType } = sortSlice.actions;

export default sortSlice.reducer;
