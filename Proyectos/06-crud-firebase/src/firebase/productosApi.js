import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

// ---------- Dados de la colección ---------
const productosCollection = collection(db, "Crud-react-productos");

/// ----------- Añadir productos ----------
export const addProducto = async (productoData) => {
  try {
    const docRef = await addDoc(productosCollection, productoData);
    return docRef.id;
  } catch (error) {
    console.log("Error al añadir un producto", error);
    throw error;
  }
};

// ------------- Cargar Productos -------------

export const getProductos = async () => {
  try {
    const data = await getDocs(productosCollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.log("Error al Obtener los productos", error);
    throw error;
  }
};
