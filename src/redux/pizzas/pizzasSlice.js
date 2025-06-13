import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async function (props, { rejectWithValue }) {
    try {
      const { filter, searсh, sortProperty, order } = props;

      const res = await fetch(
        import.meta.env.VITE_API_URL +
          "/items" +
          `?${filter}` +
          `&orderBy=${sortProperty}` +
          `&order=${order}` +
          searсh
      );

      if (!res.ok) {
        throw new Error("Server error!");
      }

      const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  items: [],
  status: "loading", // loading | succees | error
  error: null,
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = "loading";
      state.error = null;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = "succees";
      state.items = action.payload;
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
      state.items = [];
    });
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
