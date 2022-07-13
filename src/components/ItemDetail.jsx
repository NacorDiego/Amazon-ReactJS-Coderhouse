import { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import ItemAddCart from "./ItemAddCart";

function ItemDetail({ producto }) {

    const { addToCart } = useContext(CartContext)

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

    const onAdd = (num) => {
        //? Recibe la cantidad que esta en itemcount y se la pasa a la función de addToCart
        setPurchaseCompleted(true)
        addToCart(producto, num)
    }

    return (
        <>
            <div className="w-1/2 flex items-center">
                <div className="w-10/12 p-5 rounded-full bg-light-100 hover:bg-sky-100 hover:shadow-lg hover:shadow-sky-500/40 hover:scale-105 ease-linear duration-200 hover:ease-linear hover:duration-200">
                    <img className="rounded-xl" src={`${producto.img}`} alt="imagen" />
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center px-5">
                <h1 className="mt-5 text-5xl text-blue-900 px-5">{producto.marca} {producto.modelo}</h1>
                <div className="mt-10 flex items-center justify-between px-5">
                    <span className="text-blue-900 text-6xl font-medium">$ {producto.precio}</span>
                    <span className="text-xl text-sky-100 font-medium mr-16">En stock</span>
                </div>
                <div>
                    <p className="mt-10 text-xl text-blue-900 opacity-80 px-5">{producto.descripcion}</p>
                </div>
                <div>
                    <ItemAddCart onAdd={onAdd} purchaseCompleted={purchaseCompleted} num={num} sumar={sumar} restar={restar} stock={4} />
                </div>
            </div>
        </>
    );
}

export default ItemDetail;