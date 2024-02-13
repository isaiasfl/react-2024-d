import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditProductForm from "../components/EditProductForm";
import { getProductById } from "../firebase/productosApi";

const EditProductPage = () => {
  const { idproduct } = useParams();
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(idproduct);
        if (productData) {
          setProducto(productData);
        } else {
          // navigate(-1)
          navigate("/");
        }
      } catch (error) {
        console.log("Error fetching product", error);
      }
    };

    fetchProduct();
  }, []);

  if (producto === null) {
    return <div>Cargando ...</div>;
  }

  return (
    <div className="w-5/6 mx-auto mt-10">
      {JSON.stringify(producto)}
      <EditProductForm initalData={producto} />
    </div>
  );
};

export default EditProductPage;
