// AppContext.js
import { createContext, useContext } from "react";

const ProductosContext = createContext();

// --- PARA AHORRAR a la hora de llamar al contexto si coloco esto entonces
// export const useAppContext = () => {
//   return useContext(AppContext);
// };
// podré sacar de los hijos el valor del contexto de la siguiente forma
// const {valores, a , sacar} = useAppContext();

export const useProductosContext = () => {
  return useContext(ProductosContext);
};

export default ProductosContext;
