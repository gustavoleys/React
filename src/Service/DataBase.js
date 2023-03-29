import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, doc, getDoc, query, where } from 'firebase/firestore/lite';
import Products from "../productos/products";

const firebaseConfig = {
    apiKey: "AIzaSyDg8-pmw3XDdJ2-kqxvYkh5duQ-nOFiOrk",
    authDomain: "react-proyect-44aa3.firebaseapp.com",
    projectId: "react-proyect-44aa3",
    storageBucket: "react-proyect-44aa3.appspot.com",
    messagingSenderId: "938463256110",
    appId: "1:938463256110:web:a57dca12ee3a69495ec9bf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//-------EXPORTAR BASE DE DATOS----------------
export async function exportData() {
    const collectionRef = collection(db, "products");
    for (let item of Products) {
        const { id } = await addDoc(collectionRef, item);
        console.log("Documento creado", id);
    }
}
//----------------------------------------------------
// Traer todos los documentos
export async function DataBaseFire() {
    const productsColectionRef = collection(db, 'products');
    const productsGetDocs = await getDocs(productsColectionRef);
    const productsList = productsGetDocs.docs.map(doc => ({ ...doc.data(), id: doc.id }));

    return productsList
}
//----------------------------------------------------
// Traer un solo documento
export async function SingleItemDataBaseFire(idProduct) {
    const productsColectionRef = collection(db, "products");
    const docRef = doc(productsColectionRef, idProduct);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists() === false) throw new Error("No existe el documento");
    return { ...docSnapshot.data(), id: docSnapshot.id };
}
//----------------------------------------------------
// Traer varios documentos
export async function ItemsbyCategory(filter) {
    const q = query(collection(db, "products"), where("category", "==", filter));
    const querySnapshot = await getDocs(q);
    const document = querySnapshot.docs;
    const datacategory = document.map((doc) => ({ ...doc.data(), id: doc.id }))
    return datacategory
}
//----------------------------------------------------
// Crear Orden
export async function createOrder(orderData) {
    const collectionRef = collection(db, "Orders");
    const response = await addDoc(collectionRef, orderData);
    return response.id;
}
//----------------------------------------------------

