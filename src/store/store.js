import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import modalReducer from "./modalSlice";
import loginReducer from "./loginSlice";
import orderReducer from "./orderSlice";
import cartSlice from "./cartSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    modal: modalReducer,
    login: loginReducer,
    order: orderReducer,
    cart: cartSlice,
    category: categorySlice,
  },
});

export default store;
