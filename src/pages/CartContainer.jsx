import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import CartEmpty from "../components/CartEmpty";
import ItemListInCart from "../components/ItemListInCart";
import CartContext from "../store/cart-context";
import { Link } from "react-router-dom";
import OrderContext from "../store/order-context";


function CartContainer() {

    const { cart, clearCart } = useContext(CartContext)
    const { order, setOrder } = useContext(OrderContext)

    const getTotal = () => {
        let total = 0;
        cart.forEach((e, i) => {
            total = total + (parseInt(e.producto.precio) * e.cantidad)
        })
        return total
    }

    const getCartProps = () => {
        const items = []
        cart.map(prod => {
            const producto = {
                id: prod.producto.id,
                marca: prod.producto.marca,
                modelo: prod.producto.modelo,
                precio: prod.producto.precio,
                cantidad: prod.cantidad
            }
            items.push(producto)
        })
        order.items = items
        order.total = getTotal()
        console.log(order)
        setOrder(order)
    }

    return (
        <main className="bg-blue-900">
            <div className="container min-h-screen w-full flex pb-20">
                <div className="h-4/6 w-full">
                    <div className="bg-blue-900 border-b-2 border-b-yellow h-20 w-full grid grid-cols-12 items-center pb-5 mt-36">
                        <div className="col-span-4 flex justify-start">
                            <h1 className="text-5xl text-white font-bold">Carrito</h1>
                        </div>
                        <div className="col-span-4 flex justify-center">
                            <h2 className="text-2xl text-white font-normal">Datos de la compra</h2>
                        </div>
                        <div className="col-span-4 flex justify-end">
                            <button className="text-3xl text-white" onClick={clearCart}><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-5 mt-10">
                        <div className="bg-white min-h-96 rounded-xl border-4 border-yellow col-span-9 p-10">
                            {cart.length === 0 ? <CartEmpty /> : <ItemListInCart />}
                        </div>
                        <div className="col-span-3 flex flex-col gap-5">
                            <div className="bg-blue-900 h-72 rounded-xl border-2 border-yellow flex items-center">
                                <div className="w-full h-4/6 flex flex-col justify-center items-center gap-5">
                                    <div className="w-full flex justify-between items-center px-5">
                                        <span className="text-xl text-white font-medium">Subtotal</span>
                                        <span className="text-xl text-white font-medium">${getTotal()}</span>
                                    </div>
                                    <div className="w-full flex justify-between items-center px-5">
                                        <span className="text-xl text-white font-medium">Impuestos</span>
                                        <span className="text-xl text-white font-medium">$0</span>
                                    </div>
                                    <hr />
                                    <div className="w-full flex justify-between items-center px-5">
                                        <span className="text-3xl text-white font-medium">Total</span>
                                        <span className="text-3xl text-white font-medium">${getTotal()}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-blue-900 rounded-xl border-1 border-yellow flex items-end">
                                <Link to="/buyerForm" className="w-full flex justify-center items-center">
                                    <button className="w-full bg-sky-100 rounded-xl text-white text-xl font-medium hover:bg-sky ease-linear duration-150 py-4" onClick={getCartProps}>Confirmar compra</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CartContainer;