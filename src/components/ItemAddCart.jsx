import { Link } from "react-router-dom";
import ButtonAddToCart from "./ButtonAddToCart";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import CartContext from "../store/cart-context";
function ItemAddCart({ producto, stock }) {

    const { addToCart, getQuantity } = useContext(CartContext)

    const [purchaseCompleted, setPurchaseCompleted] = useState(false)

    const [num, setNum] = useState(1);

    const sumar = () => {
        setNum(num + 1)
    }

    const restar = () => {
        if (num > 1) {
            setNum(num - 1)
        }
    }

    const onAdd = () => {
        //? Recibe la cantidad que esta en itemcount y se la pasa a la función de addToCart
        setPurchaseCompleted(true)
        addToCart(producto, num)
        getQuantity()
    }

    return (
        <>
            { purchaseCompleted ? (
            <div className="w-full h-10 flex justify-center items-center px-5 mt-10">
                <Link to="/cart" className="w-5/6 h-full flex justify-center items-center bg-sky-100 text-lg font-medium text-white rounded-full">Ir al carrito</Link>
            </div>
            ) : (
            <div className="w-full flex justify-between items-end px-5 mt-5">
                <ItemCount num={num} sumar={sumar} restar={restar} stock={stock} />
                <ButtonAddToCart num={num} onAdd={onAdd} />
            </div>
            )}
        </>
    );
}

export default ItemAddCart;