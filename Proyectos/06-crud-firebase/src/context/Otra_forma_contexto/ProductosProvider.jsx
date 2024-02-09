import { useState } from "react";
import ProductosContext from "./ProductosContext";

export const ProductosProvider = ({ children }) => {
  const [userFirebase, setUser] = useState(null);

  const signInFirebase = (userData) => {
    setUser(userData);
  };

  const signOutFirebase = () => {
    setUser(null);
  };

  return (
    <ProductosContext.Provider
      value={{ userFirebase, signInFirebase, signOutFirebase }}
    >
      {children}
    </ProductosContext.Provider>
  );
};
