import { useContext } from "react";
import ItemInCart from "../components/ItemInCart";
import CartContext from "../store/cart-context";


function CartContainer() {

    const { cart } = useContext(CartContext)

    const getTotal = () => {
        let total = 0;
        cart.forEach((e, i) => {
            total = total + (parseInt(e.producto.precio) * e.cantidad)
        })
        return total
    }

    return (
        <main className="bg-blue-900">
            <div className="container min-h-screen w-full flex items-center pb-20">
                <div className="h-4/6 w-full grid grid-rows-4 grid-cols-12 gap-8 mt-20">
                    <div className="bg-blue-900 rounded-xl border-4 border-yellow h-32 col-span-12 row-span-full flex flex-col justify-center items-center mt-20">
                        <h1 className="text-5xl text-white font-bold">Mi carrito</h1>
                        <h2 className="text-2xl text-white font-normal">Datos de la compra</h2>
                    </div>
                    <div className="bg-white rounded-xl border-4 border-yellow col-span-9 row-span-4 p-10">
                        { cart.map(e =>
                            <ItemInCart key={e.producto.id} marca={e.producto.marca} modelo={e.producto.modelo} stock={e.producto.stock} img={e.producto.img} cantidad={e.cantidad} precio={e.producto.precio} />
                        )}
                    </div>
                    <div className="bg-blue-900 rounded-xl border-4 border-yellow h-40 col-span-3"></div>
                    <div className="bg-blue-900 h-60 rounded-xl border-4 border-yellow col-span-3 flex items-center">
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
        </main>
    );
}

export default CartContainer;