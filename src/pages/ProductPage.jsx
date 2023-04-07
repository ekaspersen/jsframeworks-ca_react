import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductsById } from "../store/modules/productsSlice";
import { addToCart } from "../store/modules/cartSlice";

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
        <main className="single-product_wrapper flex flex-col my-4 w-full max-w-6xl mx-auto px-2">
            <div className="tag-wrapper">
                {singleProduct.tags.map((tag, index) => (
                    <p key={index}>{tag}</p>
                ))}
            </div>
            <div className="">
                <img src={singleProduct.imageUrl} alt="Product" />
            </div>
            <div className="">
                <h1 cclassName="single-product_title">{singleProduct.title}</h1>
                <p className="single-product_descript">
                    {singleProduct.description}
                </p>
                <p className="font-semibold text-xl">
                    {singleProduct.discountedPrice === singleProduct.price
                        ? singleProduct.price
                        : singleProduct.discountedPrice}
                    $
                </p>
                <button onClick={() => handleAddToCart(singleProduct)}>
                    Add To Cart
                </button>
            </div>
            <div className="">
                <p className="text-2xl">
                    Average rating: {singleProduct.rating}
                </p>
                <ul>
                    {singleProduct.reviews.map((review, index) => (
                        <li className="review_wrapper" key={index}>
                            <p className="review_name">{review.username}</p>
                            <p className="review_description">
                                {review.description}
                            </p>
                            <p className="review_rating">{review.rating}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default ProductPage;
