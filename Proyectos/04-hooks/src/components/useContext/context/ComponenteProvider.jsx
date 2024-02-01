import { useState } from "react";
import ComponenteContext from "./ComponenteContext";

const ComponenteProvider = ({ children }) => {
  const [appState, setAppState] = useState({ contador: 0 });
  return (
    <ComponenteContext.Provider value={{ appState, setAppState }}>
      {children}
    </ComponenteContext.Provider>
  );
};

export default ComponenteProvider;
