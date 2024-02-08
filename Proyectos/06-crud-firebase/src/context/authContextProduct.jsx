import { createContext, useContext, useState } from "react";

// createContext Provider usecontext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // en el componente del contexto CREAR TODAS FUNCIONES QUE NECESITEIS PASAR
  const [userFirebase, setUserFirebase] = useState(null);
  const signInFirebase = (userData) => {
    setUserFirebase(userData);
  };
  const signOutFirebase = () => {
    setUserFirebase(null);
  };

  return (
    <AuthContext.Provider
      value={{ userFirebase, signInFirebase, signOutFirebase }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContextProduct = () => {
  return useContext(AuthContext);
};
