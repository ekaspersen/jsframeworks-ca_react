import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/modules/productsSlice";
import { addToCart } from "../store/modules/cartSlice";
function Shop() {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const memoizedProducts = useMemo(() => products, [products]);
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <main className="inner">
            {/* if this comment is here, here is what i was thinking about doing for the searchbar:
                    - create it here, track what i write by using similar states as with the contact from
                    then map on items only if it has the same value as the searchbar. i am very tired right now, 
                    hopefully i've done this before you, the teacher looks
            */}
            <input
                type="search"
                name="searchBar"
                id="searchBar"
                placeholder="Search"
            />
            <div className="products-wrapper">
                {memoizedProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="tag-wrapper">
                            {product.tags.map((tag, index) => (
                                <p key={index} className="product-card_tag">
                                    {tag}
                                </p>
                            ))}
                        </div>
                        <img
                            src={product.imageUrl}
                            alt={product.title}
                            className="product-card_image"
                        />
                        <p className="product-card_title">{product.title}</p>

                        <p>
                            {product.discountedPrice === product.price
                                ? product.price
                                : product.discountedPrice}
                            $
                        </p>
                        <div className="product-card_actions-wrapper mt-auto">
                            <Link to={product.id}>
                                <button className="btn_shadow">
                                    More info
                                </button>
                            </Link>
                            <button
                                onClick={() => handleAddToCart(product)}
                                className="btn"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Shop;
