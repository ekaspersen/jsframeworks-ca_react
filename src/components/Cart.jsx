import { Link } from "react-router-dom";
import cartIcon from "../img/shopping-cart.svg";
import { useSelector } from "react-redux";

function Cart() {
    const cart = useSelector((state) => state.cart);
    console.log(cart);
    let cartAmount = 0;
    return (
        <Link to="Checkout" className="">
            <div className=" max-w-fit relative">
                <img
                    src={cartIcon}
                    className="cart-icon max-h-[32px] w-full"
                    alt="Shopping cart"
                />
                {cartAmount === 0 ? (
                    " "
                ) : (
                    <span className="absolute bg-white w-6 h-6 text-sm grid place-items-center rounded-full right-[-8px] bottom-[-8px]">
                        {cartAmount}
                    </span>
                )}
            </div>
        </Link>
    );
}

export default Cart;
