import { useMemo, useState } from "react";

/**
 *
 * useMemo se utiliza para guardar una variable que necesita
 * mucho cálculo y que no queremos que se vuelva a ejecutar
 * o crear en cada re-renderizado.
 *
 */
const initialState = [
  { name: "producto1", price: 10, stock: 5 },
  {
    name: "producto2",
    price: 5,
    stock: 5,
  },
  {
    name: "producto3",
    price: 2,
    stock: 5,
  },
  {
    name: "producto4",
    price: 10,
    stock: 5,
  },
];
const UseMemoProductList = () => {
  const [products, setProducts] = useState(initialState);
  const [calcularCount, setCalcularCount] = useState(0);
  // función pesada
  const CalcularPrecioTotal = (product) => {
    let suma = 0;
    for (let i = 0; i < 1000000; i++) {
      suma += Math.random();
    }
    return product.price * product.stock + suma;
  };

  const memorizeTotales = useMemo(() => {
    setCalcularCount((prev) => prev + 1);
    const totalPrecios = products.map((product) => {
      return CalcularPrecioTotal(product);
    });
    return totalPrecios;
  }, [products]);
  return (
    <div>
      <h1>Número de recálculos realizados {calcularCount} </h1>
      <hr />
      <div>
        {products.map((product, index) => (
          <div key={index}>
            <h2>Precio total: {memorizeTotales[index]} </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseMemoProductList;
