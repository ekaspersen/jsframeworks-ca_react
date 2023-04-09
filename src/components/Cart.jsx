import { Link } from "react-router-dom";
import cartIcon from "../img/shopping-cart.svg";
import { useSelector } from "react-redux";

function Cart() {
    const cart = useSelector((state) => state.cart);
    let cartAmount = cart.cartItems.length;
    return (
        <Link to="Checkout" className="">
            <div className="max-w-fit relative">
                <img
                    src={cartIcon}
                    className="cart-icon max-h-[32px] w-full"
                    alt="Shopping cart"
                />
                {cartAmount === 0 ? (
                    " "
                ) : (
                    <span className="absolute bg-black text-primary w-5 h-5 text-xs font-bold grid place-items-center  right-[-8px] top-0">
                        {cartAmount}
                    </span>
                )}
            </div>
        </Link>
    );
}

export default Cart;
