import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import ItemDetailLoader from "../components/ItemDetailLoader";
import { getProduct } from "../services/firestore";
function ItemDetailContainer() {
    const [producto, setProducto] = useState()
    const [loading, setLoading] = useState(true)
    const { itemid } = useParams();

    useEffect(() => {

        getProduct(itemid).then( data => {
            setLoading(false)
            setProducto(data)
        })
        .catch( errorMsg => {
            console.error(errorMsg)
        })

        return (
            setLoading(true)
        )

    }, [itemid])

    return (
        <div className="h-screen bg-light-100">
            <div className="container h-full">
                    <div className="w-full flex justify-end pt-28">
                        <Link to="/" className="my-5 text-yellow text-lg font-medium hover:text-yellow-500 ease-linear duration-100"><FontAwesomeIcon icon={faAngleLeft} /> Volver</Link>
                    </div>
                    <hr />
                    <div className="w-full h-4/6 p-10 mt-16 bg-white shadow-lg shadow-blue-900/30 rounded-3xl flex">
                        { loading ? <ItemDetailLoader /> : (producto && <ItemDetail producto={producto} />) }
                    </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer;