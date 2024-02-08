import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteProducto, getProductos } from "../firebase/productosApi";
import Spinner from "./Spinner";

const ShowProductTable = ({ actualizarProductos }) => {
  const [loading, setLoading] = useState(false);
  const [productos, setProductos] = useState([]);
  const handleDelete = async (id) => {
    try {
      const response = await Swal.fire({
        icon: "warning",
        title: "¿Estás seguro?",
        text: "Esta acción no se puede revertir",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminarlo",
      });
      if (response.isConfirmed) {
        await deleteProducto(id);
        actualizarProductos();
      }
    } catch (error) {
      // error al borrar.
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error al intentar eliminar el producto",
      });
    }
  };

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
  }, [actualizarProductos]);
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

            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id} className="border-b">
                  <td className="py-2 px-4">{producto.id}</td>
                  <td className="py-2 px-4">{producto.nombre}</td>
                  <td className="py-2 px-4">{producto.stock}</td>
                  <td className="py-2 px-4">{producto.descripcion}</td>
                  <td className="py-2 px-4">
                    <img
                      src={producto.url}
                      alt={producto.descripcion}
                      className="h-10 w-10 object-cover"
                    />
                  </td>
                  <td className="flex justify-between gap-2 py-2 px-4">
                    <Link to={`/productos/${producto.id}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none hover:shadow-xl hover:shadow-gray-400">
                        Editar
                      </button>
                    </Link>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text focus:outline-none hover:shadow-xl hover:shadow-gray-400"
                      onClick={() => handleDelete(producto.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ShowProductTable;
