// import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonAddToCart from "./ButtonAddToCart";
import ItemCount from "./ItemCount";
function ItemAddCart({ onAdd, purchaseCompleted, num, sumar, restar, stock }) {

    return (
        <>
            { purchaseCompleted ? (
            <div className="w-full h-10 flex justify-center items-center px-5 mt-10">
                <Link to="/cart" className="w-5/6 h-full flex justify-center items-center bg-sky-100 text-lg font-medium text-white rounded-full">Ir al carrito</Link>
            </div>
            ) : (
            <div className="w-full flex justify-between items-end px-5 mt-5">
                <ItemCount num={num} sumar={sumar} restar={restar} stock={stock} />
                <ButtonAddToCart onAdd={onAdd} />
            </div>
            )}
        </>
    );
}

export default ItemAddCart;