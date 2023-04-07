import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        singleProduct: null,
    },
    reducers: {
        SetProducts: (state, action) => {
            state.products = action.payload;
        },
        SetSingleProduct: (state, action) => {
            state.singleProduct = action.payload;
        },
    },
});
export default productsSlice.reducer;

const { SetProducts } = productsSlice.actions;
const { SetSingleProduct } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await fetch(
            "https://api.noroff.dev/api/v1/online-shop/"
        );
        const data = await response.json();
        dispatch(SetProducts(data));
    } catch (error) {
        return console.log(error.message);
    }
};

export const fetchProductsById = (id) => async (dispatch) => {
    let response;
    try {
        response = await fetch(
            `https://api.noroff.dev/api/v1/online-shop/${id}`
        );
        const data = await response.json();
        dispatch(SetSingleProduct(data));
    } catch (error) {
        // handle any errors that occur during the fetch
        console.log("here error happened :( ");
        return console.error(error.message);
    }
    if (response.ok) {
        console.log("the response is correct");
    } else {
        console.log("the response is not ok");
    }
};
