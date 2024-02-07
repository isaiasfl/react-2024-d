import { useEffect, useState } from "react";
import { getProductos } from "../firebase/productosApi";
import Spinner from "./Spinner";

const ShowProductTable = () => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);

  const fetchDataProducts = async () => {
    try {
      const productosData = await getProductos();
      setProductos(productosData);
    } catch (error) {
      console.log("Error fetching productos", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDataProducts();
  }, []);
  return (
    <div className="w-3/4 mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Lista de productos</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-500 text-white">
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Nombre Producto</th>
                <th className="py-2 px-4 border-b">Stock</th>
                <th className="py-2 px-4 border-b">Descripcion</th>
                <th className="py-2 px-4 border-b">Imagen</th>
                <th className="py-2 px-4 border-b">Acciones</th>
              </tr>
            </thead>
          </table>
          <tbody>{}</tbody>
        </>
      )}
    </div>
  );
};

export default ShowProductTable;
