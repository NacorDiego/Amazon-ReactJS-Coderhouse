import { useContext } from "react";
import CartContext from "../store/cart-context";
import ItemInCart from "./ItemInCart";

function ItemListInCart() {

    const { cart } = useContext(CartContext)

    return (
        <>
            {cart.map(e =>
                <ItemInCart key={e.producto.id} marca={e.producto.marca} modelo={e.producto.modelo} stock={e.producto.stock} img={e.producto.img} cantidad={e.cantidad} precio={e.producto.precio} id={e.producto.id} />
            )}
        </>
    );
}

export default ItemListInCart;