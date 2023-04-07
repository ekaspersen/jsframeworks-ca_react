import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsSlice from "./modules/productsSlice";
import cartSlice from "./modules/cartSlice";

const reducer = combineReducers({
    products: productsSlice,
    cart: cartSlice,
});
const index = configureStore({
    reducer,
});
export default index;
