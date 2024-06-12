import { configureStore } from "@reduxjs/toolkit";

import snackbarReducer from "./slices/snackbarSlice";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
