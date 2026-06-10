import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductOrderPage() {
  const { productType } = useParams();

  const product = products[productType];

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <>
      <h1>{product.name}</h1>
      <p>Price Per Piece: ₹{product.price}</p>
    </>
  );
}

export default ProductOrderPage;