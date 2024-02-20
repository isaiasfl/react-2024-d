import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [saveValueStorage, setSaveValueStorage] = useState(() => {
    // Hay que comprobar si la key ya está en el localStorage
    const valorKeyLocalStorage = window.localStorage.getItem(key);
    return valorKeyLocalStorage
      ? JSON.parse(valorKeyLocalStorage)
      : initialValue;
  });

  const setValueInLocalStorage = (value) => {
    setSaveValueStorage(value); // <-- lo almaceno en el estado y ahora lo almaceno en el LOCALStorage
    window.localStorage.setItem(key, JSON.stringify(value)); 
  };

  return [saveValueStorage, setValueInLocalStorage];
};

export default useLocalStorage;
