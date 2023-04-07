import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../store/modules/cartSlice";
function CheckoutPage() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    };
    var svgCurrEmptywh = "32";
    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>

            {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>
                        <span>
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
                        </span>
                        Your cart is currently empty
                    </p>
                    <Link to="/">
                        <span>Continue Shopping</span>
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
                    </Link>
                </div>
            ) : (
                <div>
                    <div className="titles">
                        <h3 className="product-title">Product</h3>
                        <h3 className="price">Price</h3>
                        <h3 className="quantity">Quantity</h3>
                        <h3 className="total">Total</h3>
                    </div>
                    <div className="cart-items">
                        {cart.cartItems?.map((cartItem) => (
                            <div className="cart-item" key={cartItem.id}>
                                <img
                                    src={cartItem.imageUrl}
                                    alt={cartItem.title}
                                />
                                <div>
                                    <h4>{cartItem.title}</h4>
                                    <p>{cartItem.description}</p>
                                    <button
                                        onClick={() =>
                                            handleRemoveFromCart(cartItem)
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>
                                <p className="font-semibold text-xl">
                                    {cartItem.discountedPrice === cartItem.price
                                        ? cartItem.price
                                        : cartItem.discountedPrice}
                                    $
                                </p>
                                <div id="quantity">
                                    <button>-</button>
                                    <div className="count">
                                        {cartItem.cartQuantity}
                                    </div>
                                    <button>+</button>
                                </div>
                                <div id="totalPrice">
                                    ${cartItem.price * cartItem.cartQuantity}$
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <button id="clearCart">Clear Cart</button>
                        <div id="Checkout">
                            <div id="subtotal" className="flex justify-between">
                                <span>Subtotal</span>
                                <span id="amount">${cart.cartTotalAmount}</span>
                            </div>
                            <p>TAX FREE WORLD WIDE</p>
                            <button>Check out</button>

                            <Link to="/">
                                <div className="continue-shopping">
                                    <span>Continue Shopping</span>
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
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CheckoutPage;
