import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, updateDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCBBJcGcSGWLFMRWEP9mZA93-kgXhKJ0hE",
  authDomain: "coderhouse-reactjs-acdbd.firebaseapp.com",
  projectId: "coderhouse-reactjs-acdbd",
  storageBucket: "coderhouse-reactjs-acdbd.appspot.com",
  messagingSenderId: "409053569876",
  appId: "1:409053569876:web:09e8dce710bb42732cdec1"
}

const app  = initializeApp(firebaseConfig)

const db = getFirestore(app)

export async function getAllProducts(){

    // Referencia a la colección
    const productsCollectionRef = collection(db, "products")

    //? async await
    // Leemos el snapshot de los documentos actuales con getDocs
    const docSnapshot = await getDocs(productsCollectionRef)

    /*//? promise.then
    let docSnapshot2
    getDocs(productsCollectionRef).then((respuesta) => docSnapshot2 = respuesta)*/

    // Recibimos un array dentro de ese snapshot
    const dataProducts = docSnapshot.docs.map(item => {
        const product = {
            ...item.data(),
            id: item.id
        }

        // console.log(product)

        return product
    })

    return (dataProducts)

}
export async function getAllProductsByCategory(idCategory){

    // Referencia a la colección
    const productsCollectionRef = collection(db, "products")

    const q = query(productsCollectionRef, where( "categoria", "==", idCategory ))

    //? async await
    // Leemos el snapshot de los documentos actuales con getDocs
    const docSnapshot = await getDocs(q)

    /*//? promise.then
    let docSnapshot2
    getDocs(productsCollectionRef).then((respuesta) => docSnapshot2 = respuesta)*/

    // Recibimos un array dentro de ese snapshot
    const dataProducts = docSnapshot.docs.map(item => {
        const product = {
            ...item.data(),
            id: item.id
        }

        // console.log(product)

        return product
    })

    return (dataProducts)

}

export async function getProduct(id){
    const productsCollectionRef = collection(db, "products")
    const docRef = doc(productsCollectionRef, id)

    const docSnapshot = await getDoc(docRef)

    return docSnapshot.data()
}

export function pushOrder (order, showAlert) {
    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, order)
    .then(({id}) => {
        (id !== 0) && showAlert(id)
    })
}

export async function updateStock (id, amount) {
    const productsCollectionRef = collection(db, "products")
    const docRef = doc(productsCollectionRef, id)
    const docSnapshot = await getDoc(docRef)
    let newStock = docSnapshot.data().stock - amount
    updateDoc(docRef, {stock: newStock})
    console.log("Ahora el stock es: " + docSnapshot.data().stock)
}

export default db