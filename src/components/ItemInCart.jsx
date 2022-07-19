import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import CartContext from "../store/cart-context";

function ItemInCart({ marca, modelo, stock, img, cantidad, precio, id }) {

    const { removeItemInCart } = useContext(CartContext)

    const getPriceItem = () => {
        let total = (parseInt(precio) * cantidad)
        return total
    }

    const removeItem = () => {
        removeItemInCart(id)
    }

    return (
        <div>
            <hr className="bg-blue-900 text-blue-900" />
            <div className="h-32 w-full my-6 grid grid-cols-12 items-center">
                <div className="col-span-3">
                    <img className="h-32" src={img} alt="" />
                </div>
                <div className="h-full col-span-5 flex flex-col justify-between items-start">
                    <span className="text-2xl font-medium">{marca} {modelo}</span>
                    <span className="text-xl font-medium text-sky-100">En stock</span>
                    <button className="text-xl font-medium text-blue-900/70" onClick={removeItem}><FontAwesomeIcon icon={faTrash} /> Eliminar</button>
                </div>
                <div className="col-span-1">
                    <span className="text-xl font-medium text-blue-900">${precio}</span>
                </div>
                <div className="flex col-span-3 flex-col justify-center items-center">
                    <span className="text-xl font-normal text-blue-900">Cantidad: {cantidad}</span>
                    <span className="text-xl font-normal text-sky-100">${getPriceItem()}</span>
                </div>
            </div>
        </div>
    );
}

export default ItemInCart;