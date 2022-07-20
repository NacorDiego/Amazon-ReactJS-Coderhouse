import { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getFirestore, doc, getDoc } from 'firebase/firestore'



function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const { catid } = useParams()

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('/data/products.json')
    //             .then(resp => resp.json())
    //             .then(data => catid ? setProductos(data.filter((item) => item.categoria === catid)) : setProductos(data))
    //     }, 1000)
    // }, [catid])

    useEffect(() => {

        const db = getFirestore()

        const productRef = doc( db, "products", "ANUjQ4121hHzrj2jt16p" )

        getDoc(productRef).then((snapshot) => {
            if(snapshot.exists()){
                setProductos({...snapshot.data()})
            }
        })

    },[])

    return (
        <section className="bg-light-100 pt-32 min-h-screen pb-32">
            <div className="container bg-light-100 flex flex-col items-start gap-16 pt-20">
                <div className="w-full border-b-2 border-b-blue-900 flex justify-between items-center pb-4">
                    <h1 className="text-5xl text-blue-900 font-medium">Catálogo de productos</h1>
                    <a className="text-2xl text-sky-100 font-medium hover:text-sky" href="/"><FontAwesomeIcon className="text-xl" icon={faPlus} /> Ver más</a>
                </div>
                {/* 1:14:00min video Firebase */}
                {console.log(productos)}
                {/* <ItemList productos={productos} /> */}
            </div>
        </section>
    );
}

export default ItemListContainer;