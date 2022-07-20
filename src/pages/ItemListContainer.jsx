import { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'



function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const { catid } = useParams()

    useEffect(() => {

        //? Traigo un producto específico de la colección a travez del ID.
        /*const productRef = doc( db, "products", "ANUjQ4121hHzrj2jt16p" )

        getDoc(productRef).then((snapshot) => {
            if(snapshot.exists()){
                setProductos({...snapshot.data()})
            }
        })*/

        /*//? Aplico filtro de precio con query
        const productsRef = query(collection( db, "products" ), where("precio", "<", 500))*/

        const db = getFirestore()

        if (catid){
            if (catid === "indumentaria"){ 
                //? Aplico filtro de categorías con query
                const productsRef = query(collection( db, "products" ), where("categoria", "==", "indumentaria"))
                getDocs(productsRef).then((snapshot) => {

                    setProductos(snapshot.docs.map((doc) => doc.data() ))

                })
            } else {
                const productsRef = query(collection( db, "products" ), where("categoria", "==", "electronica"))
                getDocs(productsRef).then((snapshot) => {

                    setProductos(snapshot.docs.map((doc) => doc.data() ))

                })
            }
        } else {
            //? Traigo todos los productos de la colección
            const productsRef = collection( db, "products" )
            getDocs(productsRef).then((snapshot) => {

                setProductos(snapshot.docs.map((doc) => doc.data() ))

            })
        }

    },[catid])

    return (
        <section className="bg-light-100 pt-32 min-h-screen pb-32">
            <div className="container bg-light-100 flex flex-col items-start gap-16 pt-20">
                <div className="w-full border-b-2 border-b-blue-900 flex justify-between items-center pb-4">
                    <h1 className="text-5xl text-blue-900 font-medium">Catálogo de productos</h1>
                    <a className="text-2xl text-sky-100 font-medium hover:text-sky" href="/"><FontAwesomeIcon className="text-xl" icon={faPlus} /> Ver más</a>
                </div>
                {console.log(productos)}
                <ItemList productos={productos} />
            </div>
        </section>
    );
}

export default ItemListContainer;