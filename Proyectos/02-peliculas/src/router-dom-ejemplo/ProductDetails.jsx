import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const parametros = useParams();
  return (
    <>
      <div>Estoy en Detalles</div>
      <div>del producto : {parametros.productId}</div>
    </>
  );
};

export default ProductDetails;
