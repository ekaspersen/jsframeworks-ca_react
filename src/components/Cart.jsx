import { Link } from "react-router-dom";
import cartIcon from "../img/cart_icon_solid.png";
function Cart() {
    let cartAmount = 0;
    return (
        <Link to="Checkout">
            <img src={cartIcon} alt="Shopping cart" />
            <span>{cartAmount}</span>
        </Link>
    );
}

export default Cart;
