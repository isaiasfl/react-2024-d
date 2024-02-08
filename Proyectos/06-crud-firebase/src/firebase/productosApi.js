import {
  GoogleAuthProvider,
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
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

// --------------- Eliminar Productos ------------

export const deleteProducto = async (id) => {
  try {
    // seleccionar el documento con ese id
    const productDocRef = doc(productosCollection, id);
    // borrar el documento seleccionado
    await deleteDoc(productDocRef);
  } catch (error) {
    console.error("Error deleting", error);
    throw error;
  }
};

export const singWithGoogle = async (signInFirebase, setError, navigate) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  try {
    await setPersistence(auth, browserSessionPersistence);

    const result = await signInWithPopup(auth, provider);
    // result trae TODA LA INFORMACIÓN de la cuenta seleccionada.
    const user = result.user;
    // aquí mando el usuario al contexto global
    signInFirebase(user);
    console.log(user);
    navigate("/");
  } catch (error) {
    setError(`Error  al iniciar sesión: ${error}`);
  }
};
