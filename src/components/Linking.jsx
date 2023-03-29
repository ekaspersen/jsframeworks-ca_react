import { Routes, Route } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutPageSuccess from "./pages/CheckoutPageSuccess";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import Shop from "./pages/Shop";

export default function Linking() {
    return (
        <Routes>
            <Route index element={<Shop />} />
            <Route path="product/420" element={<ProductPage />} />
            <Route path="Checkout" element={<CheckoutPage />} />
            <Route path="CheckoutSuccess" element={<CheckoutPageSuccess />} />
            <Route path="Contact" element={<ContactPage />} />
            <Route path="*" element={<div>Route not found</div>} />
        </Routes>
    );
}
