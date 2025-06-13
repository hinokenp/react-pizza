import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  items: [],
};

function findItem(state, action) {
  return state.items.find(
    (obj) =>
      obj.id === action.payload.id &&
      obj.size === action.payload.size &&
      obj.type === action.payload.type
  );
}

function calcTotalPrice(state) {
  state.totalPrice = state.items.reduce((sum, obj) => {
    return obj.count * obj.price + sum;
  }, 0);
}

function calctotalCount(state) {
  state.totalCount = state.items.reduce((count, obj) => {
    return obj.count + count;
  }, 0);
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const foundItem = findItem(state, action);

      if (foundItem) {
        foundItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      calcTotalPrice(state);
      calctotalCount(state);
    },
    minusItem: (state, action) => {
      const foundItem = findItem(state, action);

      if (foundItem) {
        foundItem.count--;

        if (foundItem.count <= 0) {
          state.items = state.items.filter(
            (obj) =>
              obj.id !== action.payload.id ||
              obj.size !== action.payload.size ||
              obj.type !== action.payload.type
          );
        }
      }

      calcTotalPrice(state);
      calctotalCount(state);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter(
        (obj) =>
          obj.id !== action.payload.id ||
          obj.size !== action.payload.size ||
          obj.type !== action.payload.type
      );

      calcTotalPrice(state);
      calctotalCount(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const { addProduct, removeProduct, minusItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
