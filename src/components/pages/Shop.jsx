import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../store/modules/productsSlice";

function Shop() {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const memoizedProducts = useMemo(() => products, [products]);
    return (
        <main>
            <h1>Welcome to Shopping-Page</h1>
            {memoizedProducts.map((product) => (
                <Link
                    to={`product/${product.id}`}
                    key={product.id}
                    className="product-card"
                >
                    <p className="product-card_title">{product.title}</p>
                </Link>
            ))}
        </main>
    );
}

export default Shop;
