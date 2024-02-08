import { useState } from "react";
import Swal from "sweetalert2";
import { addProducto } from "../firebase/productosApi";

const AddProductForm = ({actualizarProductos}) => {
  const [nombre, setNombre] = useState("");
  const [stock, setStock] = useState(0);
  const [descripcion, setDescripcion] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // tengo que llamar a una función que me añada los datos del formulario.
    try {
      const nuevoProducto = await addProducto({
        nombre,
        stock,
        descripcion,
        url,
      });
      console.log("Producto añadido con id: ", nuevoProducto);

      // ventana indicando si todo ok
      Swal.fire({
        icon: "success",
        title: "¡Inserción correcta!",
        text: "Datos del producto insertados correctamente",
      });

      // seteamos los estados a valor inicial
      setNombre("");
      setStock(0);
      setDescripcion("");
      setUrl("");
      actualizarProductos();
    } catch (error) {
      console.error("Error al añadir un producto", error);
    }
  };

  return (
    <div className="w-1/2 mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-3xl font-semibold mb-4"> Añadir nuevo Producto</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nombre"
          >
            Nombre del Producto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500"
            type="text"
            id="nombre"
            placeholder="Nombre del Producto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stock"
          >
            Stock del Producto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500"
            type="number"
            id="stock"
            placeholder="Stock del Producto"
            value={stock}
            required
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="descripcion"
          >
            Descripción del Producto
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="url"
          >
            Imagen del Producto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500"
            type="text"
            id="url"
            placeholder="Url del Producto"
            value={url}
            required
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700">
            Añadir producto
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
