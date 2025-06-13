import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoies/categoriesSlice";
import sortReducer from "./sort/sortSlice";
import cartReducer from "./cart/cartSlice";
import searchReducer from "./search/searchSlice";
import pizzasReducer from "./pizzas/pizzasSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    sort: sortReducer,
    cart: cartReducer,
    pizzas: pizzasReducer,
    search: searchReducer,
  },
});
