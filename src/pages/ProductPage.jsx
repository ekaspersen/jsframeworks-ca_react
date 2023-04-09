import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductsById } from "../store/modules/productsSlice";
import { addToCart } from "../store/modules/cartSlice";
import Shop from "../components/Shop";

function ProductPage() {
    const dispatch = useDispatch();
    const { singleProduct } = useSelector((state) => state.products);
    let { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchProductsById(id));
        }
    }, [dispatch, id]);
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    if (!singleProduct || !singleProduct.title) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <main className="single-product_wrapper">
                <div className="flex-1">
                    <img
                        className="single-product_img"
                        src={singleProduct.imageUrl}
                        alt="Product"
                    />
                </div>
                <div className="single-product_text-wrapper">
                    <div className="single-product_info">
                        <div className="upper">
                            <div className="tag-wrapper">
                                {singleProduct.tags.map((tag, index) => (
                                    <p key={index}>{tag}</p>
                                ))}
                            </div>
                            <h1 className="single-product_title">
                                {singleProduct.title}
                            </h1>
                        </div>
                        <p className="single-product_description">
                            {singleProduct.description}
                        </p>
                        <div className="downer">
                            <p className="single-product_price font-semibold text-xl">
                                {singleProduct.discountedPrice ===
                                singleProduct.price
                                    ? singleProduct.price
                                    : singleProduct.discountedPrice}
                                $
                            </p>
                            <button
                                className="btn"
                                onClick={() => handleAddToCart(singleProduct)}
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>

                    <div className="">
                        <span className="cart-item_rating text-2xl">
                            <p>Average rating: {singleProduct.rating}</p>
                            <svg
                                width="20"
                                height="20"
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
                        <ul>
                            {singleProduct.reviews.map((review, index) => (
                                <li className="review_wrapper" key={index}>
                                    <p className="review_name">
                                        {review.username}
                                    </p>
                                    <p className="review_description">
                                        {review.description}
                                    </p>
                                    <span className="cart-item_rating">
                                        <p>rating: {review.rating}</p>
                                        <svg
                                            width="20"
                                            height="20"
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
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ProductPage;
