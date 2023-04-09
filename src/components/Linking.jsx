import { Routes, Route } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage";
import CheckoutPageSuccess from "../pages/CheckoutPageSuccess";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";
import ShoppingPage from "../pages/ShoppingPage";

export default function Linking() {
    return (
        <Routes>
            <Route path="/" element={<ShoppingPage />} />
            <Route path="/:id" element={<ProductPage />} />
            <Route path="Checkout" element={<CheckoutPage />} />
            <Route
                path="Checkout/CheckoutSuccess"
                element={<CheckoutPageSuccess />}
            />
            <Route path="Contact" element={<ContactPage />} />
            <Route path="*" element={<div>Route not found</div>} />
        </Routes>
    );
}
