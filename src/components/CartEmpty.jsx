import { Link } from 'react-router-dom'

function CartEmpty() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-5">
                <h2 className="text-5xl text-blue-900 font-bold">Tu carrito está vacio.</h2>
                <Link className="text-2xl text-sky-100 hover:text-sky hover: ease-linear duration-150 font-medium" to="/">Volver al catálogo</Link>
            </div>
        </div>
    );
}

export default CartEmpty;