import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsSlice from "./modules/productsSlice";

const reducer = combineReducers({
    products: productsSlice,
});

const index = configureStore({
    reducer,
});
export default index;
