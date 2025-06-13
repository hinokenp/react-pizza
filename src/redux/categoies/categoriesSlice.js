import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    changeCategoriesId: (state, action) => {
      state.value = Number(action.payload);
    },
  },
});

export const { changeCategoriesId } = categoriesSlice.actions;

export default categoriesSlice.reducer;
