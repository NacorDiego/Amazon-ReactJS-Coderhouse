import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
function ItemDetailContainer() {
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState()
    const { itemid } = useParams();
    useEffect ( () => {
        setTimeout( () => {
            fetch ('../data/products.json')
                .then(resp => resp.json())
                .then(data => setProductos(data))
                .catch(err => console.log(err))
                .finally(console.log("termino correctamente"))
            const item = productos.find((item) => item.id === itemid)
            setProducto(item)
        },2000)
    });

    return (
        <>
            {producto && <ItemDetail producto={producto} />}
        </>
    );
}

export default ItemDetailContainer;