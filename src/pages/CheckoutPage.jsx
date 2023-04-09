import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    decreaseCart,
    removeFromCart,
    increaseCart,
    clearCart,
    getTotals,
} from "../store/modules/cartSlice";
import { useEffect } from "react";

function CheckoutPage() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart]);

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    };
    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem));
    };
    const handleIncreaseCart = (cartItem) => {
        dispatch(increaseCart(cartItem));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    var svgCurrEmptywh = "32";

    return (
        <div className="cart-container">
            {cart.cartItems.length === 0 ? (
                <div className="flex flex-col justify-center items-center gap[5vw] min-h-[300px] w-full">
                    <span className="flex items-center gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={svgCurrEmptywh}
                            height={svgCurrEmptywh}
                            fill="currentColor"
                            className="bi bi-emoji-dizzy"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M9.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm-5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zM10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                        </svg>
                        <p>Your cart is currently empty</p>
                    </span>

                    <Link to="/">
                        <span className="flex items-center gap-4 underline underline-offset-4">
                            Back to Shopping
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={svgCurrEmptywh}
                                height={svgCurrEmptywh}
                                fill="currentColor"
                                className="bi bi-emoji-kiss"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.493 13.368a7 7 0 1 1 2.489-4.858c.344.033.68.147.975.328a8 8 0 1 0-2.654 5.152 8.58 8.58 0 0 1-.81-.622Zm-3.731-3.22a13 13 0 0 0-1.107.318.5.5 0 1 1-.31-.95c.38-.125.802-.254 1.192-.343.37-.086.78-.153 1.103-.108.16.022.394.085.561.286.188.226.187.497.131.705a1.892 1.892 0 0 1-.31.593c-.077.107-.168.22-.275.343.107.124.199.24.276.347.142.197.256.397.31.595.055.208.056.479-.132.706-.168.2-.404.262-.563.284-.323.043-.733-.027-1.102-.113a14.87 14.87 0 0 1-1.191-.345.5.5 0 1 1 .31-.95c.371.12.761.24 1.109.321.176.041.325.069.446.084a5.609 5.609 0 0 0-.502-.584.5.5 0 0 1 .002-.695 5.52 5.52 0 0 0 .5-.577 4.465 4.465 0 0 0-.448.082Zm.766-.087-.003-.001-.003-.001c.004 0 .006.002.006.002Zm.002 1.867-.006.001a.038.038 0 0 1 .006-.002ZM6 8c.552 0 1-.672 1-1.5S6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8Zm2.757-.563a.5.5 0 0 0 .68-.194.934.934 0 0 1 .813-.493c.339 0 .645.19.813.493a.5.5 0 0 0 .874-.486A1.934 1.934 0 0 0 10.25 5.75c-.73 0-1.356.412-1.687 1.007a.5.5 0 0 0 .194.68ZM14 9.828c1.11-1.14 3.884.856 0 3.422-3.884-2.566-1.11-4.562 0-3.421Z"
                                />
                            </svg>
                        </span>
                    </Link>
                </div>
            ) : (
                <div className="cart-wrapper">
                    <div className="cart-checkout" id="Checkout">
                        <div
                            id="subtotal"
                            className="flex flex-col items-centery"
                        >
                            <span className="text-2xl">Subtotal</span>
                            <span id="amount" className="text-4xl">
                                ${cart.cartTotalAmount.toFixed(2)}
                            </span>
                            <p className="text-xs opacity-40">
                                TAX FREE WORLD WIDE
                            </p>
                        </div>

                        <Link
                            className="w-fit mx-auto"
                            to="/Checkout/CheckoutSuccess"
                        >
                            <span className="btn inline-block">Buy</span>
                        </Link>
                        <p>OR</p>
                        <Link to="/">
                            <div className="continue-shopping w-fit mx-auto">
                                <span className="btn_shadow inline-block">
                                    Continue Shopping
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className="cart-list">
                        <h3 className="italic">Your items:</h3>
                        {cart.cartItems?.map((cartItem) => (
                            <div className="cart-item" key={cartItem.id}>
                                <Link to={`/${cartItem.id}`}>
                                    <div className="cart-item_product">
                                        <img
                                            className="cart-item_product-img"
                                            src={cartItem.imageUrl}
                                            alt={cartItem.title}
                                        />
                                        <div className="flex flex-col">
                                            <h4 className="font-bold">
                                                {cartItem.title}
                                            </h4>
                                            <p>
                                                {cartItem.discountedPrice ===
                                                cartItem.price
                                                    ? cartItem.price
                                                    : cartItem.discountedPrice}
                                                $
                                            </p>
                                            <span className="cart-item_rating">
                                                <p>{cartItem.rating}</p>
                                                <svg
                                                    width="13"
                                                    height="13"
                                                    viewBox="0 0 13 13"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2.88843 12.4544C2.57964 12.6128 2.22925 12.3352 2.29165 11.9808L2.95562 8.19694L0.137318 5.51223C-0.125873 5.26104 0.0109224 4.80186 0.363711 4.75226L4.28198 4.19548L6.02912 0.733992C6.18672 0.422003 6.6131 0.422003 6.7707 0.733992L8.51784 4.19548L12.4361 4.75226C12.7889 4.80186 12.9257 5.26104 12.6617 5.51223L9.8442 8.19694L10.5082 11.9808C10.5706 12.3352 10.2202 12.6128 9.91139 12.4544L6.39871 10.6497L2.88843 12.4544Z"
                                                        fill="#34D89D"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </Link>

                                <div
                                    id="quantity"
                                    className="cart-item_quantity"
                                >
                                    <button
                                        className="cart-item_quantity-button"
                                        onClick={() =>
                                            handleDecreaseCart(cartItem)
                                        }
                                    >
                                        -
                                    </button>
                                    <div className="count">
                                        {cartItem.cartQuantity}
                                    </div>
                                    <button
                                        onClick={() =>
                                            handleIncreaseCart(cartItem)
                                        }
                                        className="cart-item_quantity-button"
                                    >
                                        +
                                    </button>
                                </div>
                                <div
                                    id="totalPrice"
                                    className="cart-item_total-price w-20 flex justify-center items-center overflow-clip"
                                >
                                    {cartItem.discountedPrice === cartItem.price
                                        ? (
                                              cartItem.price *
                                              cartItem.cartQuantity
                                          ).toFixed(2)
                                        : (
                                              cartItem.discountedPrice *
                                              cartItem.cartQuantity
                                          ).toFixed(2)}
                                    $
                                </div>
                                <button
                                    className="cart-item_delete"
                                    onClick={() =>
                                        handleRemoveFromCart(cartItem)
                                    }
                                >
                                    <svg
                                        width="21"
                                        height="24"
                                        viewBox="0 0 21 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.03846 2.00001C1.63044 2.00001 1.23912 2.1621 0.950605 2.45061C0.662087 2.73913 0.5 3.13045 0.5 3.53847V5.07693C0.5 5.48496 0.662087 5.87627 0.950605 6.16479C1.23912 6.45331 1.63044 6.61539 2.03846 6.61539H2.80769V20.4615C2.80769 21.2776 3.13187 22.0602 3.7089 22.6373C4.28594 23.2143 5.06856 23.5385 5.88462 23.5385H15.1154C15.9314 23.5385 16.7141 23.2143 17.2911 22.6373C17.8681 22.0602 18.1923 21.2776 18.1923 20.4615V6.61539H18.9615C19.3696 6.61539 19.7609 6.45331 20.0494 6.16479C20.3379 5.87627 20.5 5.48496 20.5 5.07693V3.53847C20.5 3.13045 20.3379 2.73913 20.0494 2.45061C19.7609 2.1621 19.3696 2.00001 18.9615 2.00001H13.5769C13.5769 1.59198 13.4148 1.20067 13.1263 0.912153C12.8378 0.623635 12.4465 0.461548 12.0385 0.461548L8.96154 0.461548C8.55351 0.461548 8.1622 0.623635 7.87368 0.912153C7.58516 1.20067 7.42308 1.59198 7.42308 2.00001H2.03846ZM6.65385 8.15386C6.85786 8.15386 7.05352 8.2349 7.19777 8.37916C7.34203 8.52342 7.42308 8.71907 7.42308 8.92309V19.6923C7.42308 19.8963 7.34203 20.092 7.19777 20.2362C7.05352 20.3805 6.85786 20.4615 6.65385 20.4615C6.44983 20.4615 6.25418 20.3805 6.10992 20.2362C5.96566 20.092 5.88462 19.8963 5.88462 19.6923V8.92309C5.88462 8.71907 5.96566 8.52342 6.10992 8.37916C6.25418 8.2349 6.44983 8.15386 6.65385 8.15386ZM10.5 8.15386C10.704 8.15386 10.8997 8.2349 11.0439 8.37916C11.1882 8.52342 11.2692 8.71907 11.2692 8.92309V19.6923C11.2692 19.8963 11.1882 20.092 11.0439 20.2362C10.8997 20.3805 10.704 20.4615 10.5 20.4615C10.296 20.4615 10.1003 20.3805 9.95607 20.2362C9.81181 20.092 9.73077 19.8963 9.73077 19.6923V8.92309C9.73077 8.71907 9.81181 8.52342 9.95607 8.37916C10.1003 8.2349 10.296 8.15386 10.5 8.15386ZM15.1154 8.92309V19.6923C15.1154 19.8963 15.0343 20.092 14.8901 20.2362C14.7458 20.3805 14.5502 20.4615 14.3462 20.4615C14.1421 20.4615 13.9465 20.3805 13.8022 20.2362C13.658 20.092 13.5769 19.8963 13.5769 19.6923V8.92309C13.5769 8.71907 13.658 8.52342 13.8022 8.37916C13.9465 8.2349 14.1421 8.15386 14.3462 8.15386C14.5502 8.15386 14.7458 8.2349 14.8901 8.37916C15.0343 8.52342 15.1154 8.71907 15.1154 8.92309Z"
                                            fill="#34D89D"
                                        />
                                    </svg>
                                </button>
                            </div>
                        ))}
                        <button
                            className="flex gap-1 font-bold text-danger opacity-80 focus:opacity-100 hover:opacity-100"
                            onClick={handleClearCart}
                            id="clearCart"
                        >
                            <svg
                                width="20"
                                height="24"
                                viewBox="0 0 20 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.53846 1.53846C1.13044 1.53846 0.739122 1.70055 0.450605 1.98907C0.162087 2.27758 0 2.6689 0 3.07692V4.61538C0 5.02341 0.162087 5.41472 0.450605 5.70324C0.739122 5.99176 1.13044 6.15385 1.53846 6.15385H2.30769V20C2.30769 20.8161 2.63187 21.5987 3.2089 22.1757C3.78594 22.7527 4.56856 23.0769 5.38462 23.0769H14.6154C15.4314 23.0769 16.2141 22.7527 16.7911 22.1757C17.3681 21.5987 17.6923 20.8161 17.6923 20V6.15385H18.4615C18.8696 6.15385 19.2609 5.99176 19.5494 5.70324C19.8379 5.41472 20 5.02341 20 4.61538V3.07692C20 2.6689 19.8379 2.27758 19.5494 1.98907C19.2609 1.70055 18.8696 1.53846 18.4615 1.53846H13.0769C13.0769 1.13044 12.9148 0.739122 12.6263 0.450605C12.3378 0.162087 11.9465 0 11.5385 0L8.46154 0C8.05351 0 7.6622 0.162087 7.37368 0.450605C7.08516 0.739122 6.92308 1.13044 6.92308 1.53846H1.53846ZM6.15385 7.69231C6.35786 7.69231 6.55352 7.77335 6.69777 7.91761C6.84203 8.06187 6.92308 8.25753 6.92308 8.46154V19.2308C6.92308 19.4348 6.84203 19.6304 6.69777 19.7747C6.55352 19.919 6.35786 20 6.15385 20C5.94983 20 5.75418 19.919 5.60992 19.7747C5.46566 19.6304 5.38462 19.4348 5.38462 19.2308V8.46154C5.38462 8.25753 5.46566 8.06187 5.60992 7.91761C5.75418 7.77335 5.94983 7.69231 6.15385 7.69231ZM10 7.69231C10.204 7.69231 10.3997 7.77335 10.5439 7.91761C10.6882 8.06187 10.7692 8.25753 10.7692 8.46154V19.2308C10.7692 19.4348 10.6882 19.6304 10.5439 19.7747C10.3997 19.919 10.204 20 10 20C9.79599 20 9.60033 19.919 9.45607 19.7747C9.31181 19.6304 9.23077 19.4348 9.23077 19.2308V8.46154C9.23077 8.25753 9.31181 8.06187 9.45607 7.91761C9.60033 7.77335 9.79599 7.69231 10 7.69231ZM14.6154 8.46154V19.2308C14.6154 19.4348 14.5343 19.6304 14.3901 19.7747C14.2458 19.919 14.0502 20 13.8462 20C13.6421 20 13.4465 19.919 13.3022 19.7747C13.158 19.6304 13.0769 19.4348 13.0769 19.2308V8.46154C13.0769 8.25753 13.158 8.06187 13.3022 7.91761C13.4465 7.77335 13.6421 7.69231 13.8462 7.69231C14.0502 7.69231 14.2458 7.77335 14.3901 7.91761C14.5343 8.06187 14.6154 8.25753 14.6154 8.46154Z"
                                    fill="#FF0000"
                                />
                            </svg>
                            Clear
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CheckoutPage;
