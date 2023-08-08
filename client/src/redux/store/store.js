import { configureStore } from "@reduxjs/toolkit";
import { foodsApi } from "../api/foodsApi";
import foodReducer from "../slices/foodSlice";

export const store = configureStore({
  reducer: {
    [foodsApi.reducerPath]: foodsApi.reducer,
    foods: foodReducer,
  },

  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(foodsApi.middleware),
});
