import { useParams } from "react-router-dom";

function ProductPage() {
    let params = useParams();
    return <div>Product id: {params.id}</div>;
}

export default ProductPage;
