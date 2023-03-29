import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
    },
    reducers: {
        SetProducts: (state, action) => {
            state.products = action.payload;
            console.log(action.payload);
        },
    },
});
export default productsSlice.reducer;

const { SetProducts } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await fetch(
            "https://api.noroff.dev/api/v1/online-shop/"
        );
        const data = await response.json();
        console.log("data: ", data);
        dispatch(SetProducts(data.products));
    } catch (error) {
        return console.log(error.message);
    }
};
