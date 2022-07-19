import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import ItemInCart from "../components/ItemInCart";
import CartContext from "../store/cart-context";


function CartContainer() {

    const { cart, clearCart } = useContext(CartContext)

    const getTotal = () => {
        let total = 0;
        cart.forEach((e, i) => {
            total = total + (parseInt(e.producto.precio) * e.cantidad)
        })
        return total
    }

    return (
        <main className="bg-blue-900">
            <div className="container min-h-screen w-full flex pb-20">
                <div className="h-4/6 w-full">
                    <div className="bg-blue-900 border-b-2 border-b-yellow h-20 col-span-12 row-span-full flex justify-between items-end pb-5 mt-36">
                        <h1 className="text-5xl text-white font-bold">Mi carrito</h1>
                        <h2 className="text-2xl text-white font-normal">Datos de la compra</h2>
                        <button className="text-3xl text-white" onClick={clearCart}><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                    <div className="grid grid-cols-12 gap-5 mt-10">
                        <div className="bg-white min-h-96 rounded-xl border-4 border-yellow col-span-9 p-10">
                            { cart.map(e =>
                                <ItemInCart key={e.producto.id} marca={e.producto.marca} modelo={e.producto.modelo} stock={e.producto.stock} img={e.producto.img} cantidad={e.cantidad} precio={e.producto.precio} id={e.producto.id} />
                            )}
                        </div>
                        <div className="col-span-3 flex flex-col gap-5">
                            <div className="bg-blue-900 rounded-xl border-2 border-yellow h-28"></div>
                            <div className="bg-blue-900 h-60 rounded-xl border-2 border-yellow flex items-center">
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
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CartContainer;