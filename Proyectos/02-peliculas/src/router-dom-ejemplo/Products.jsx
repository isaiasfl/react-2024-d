import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>estoy en Productos</div>
      <ul>
        <li>
          <Link to="productos/producto-1">Producto 1</Link>
        </li>
        <li>
          <Link to="productos/producto-2">Producto 2</Link>
        </li>
        <li>
          <Link to="productos/producto-3">Producto 3</Link>
        </li>
      </ul>
      <Link to="">Volver al Home </Link>
    </>
  );
};

export default Products;
