import { Link } from "react-router-dom";
import Cart from "./Cart";

export default function Nav() {
    return (
        <nav className="main-navigation">
            <div className="flex-left">
                <Link to="/">
                    <span>Shop</span>
                </Link>
                <Link to="Contact">
                    <span>Contact</span>
                </Link>
            </div>

            <div className="flex-right">
                <Cart />
            </div>
        </nav>
    );
}
