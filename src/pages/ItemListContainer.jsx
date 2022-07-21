import { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { getAllProducts, getAllProductsByCategory } from '../services/firestore'



function ItemListContainer() {
    const [products, setProducts] = useState([])
    const { catid } = useParams()

    useEffect(() => {

        if (catid) { // Si catid existe: Traigo los items que se corresponden con el catid.
            getAllProductsByCategory(catid).then( data => {
                setProducts(data)
            })
            .catch( (errorMsg) => {
                console.error(errorMsg)
            })
        } else { // Si catid no existe: Traigo todos los items de la colección.
            getAllProducts().then( data => {
                setProducts(data)
            })
            .catch( (errorMsg) => {
                console.error(errorMsg)
            })
        }

    }, [catid])


    return (
        <section className="bg-light-100 pt-32 min-h-screen pb-32">
            <div className="container bg-light-100 flex flex-col items-start gap-16 pt-20">
                <div className="w-full border-b-2 border-b-blue-900 flex justify-between items-center pb-4">
                    <h1 className="text-5xl text-blue-900 font-medium">Catálogo de productos</h1>
                    <a className="text-2xl text-sky-100 font-medium hover:text-sky" href="/"><FontAwesomeIcon className="text-xl" icon={faPlus} /> Ver más</a>
                </div>
                <ItemList productos={products} />
            </div>
        </section>
    );
}

export default ItemListContainer;