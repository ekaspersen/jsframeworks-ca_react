import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/modules/productsSlice";
function Shop() {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const memoizedProducts = useMemo(() => products, [products]);
    return (
        <main>
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
                        <div className="product-card_actions-wrapper">
                            <Link to={`shop/${product.id}`}>
                                <button className="btn_shadow">
                                    More info
                                </button>
                            </Link>
                            <button className="btn">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Shop;