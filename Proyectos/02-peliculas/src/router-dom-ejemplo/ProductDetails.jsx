import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  return (
    <>
      <div>Estoy en Detalles</div>
      <div>del producto : {productId}</div>
    </>
  );
};

export default ProductDetails;
