import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

function ItemDetail({ producto }) {
    console.log(producto)
    return (
        <div className="h-screen bg-light-100">
            <div className="container mx-auto">
                <div className="w-full flex justify-end">
                    <Link to="/" className="my-5 text-yellow text-lg font-medium hover:text-yellow-500 ease-linear duration-100"><FontAwesomeIcon icon={faAngleLeft}/> Volver</Link>
                </div>
                <hr />
                <div className="w-full p-10 mt-16 bg-white shadow-lg shadow-blue-900/30 rounded-3xl flex">
                    <div className="w-1/2 flex">
                        <div className="w-10/12 p-5 rounded-full bg-light-100 hover:bg-sky-100 hover:shadow-lg hover:shadow-sky-500/40 hover:scale-105 ease-linear duration-200 hover:ease-linear hover:duration-200">
                            <img className="rounded-xl" src={`.${producto.img}`} alt="imagen" />
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col">
                        <h1 className="mt-5 text-5xl text-blue-900">{producto.marca} {producto.modelo}</h1>
                        <div className="mt-10 flex items-center justify-between">
                            <span className="text-blue-900 text-6xl font-medium">$ {producto.precio}</span>
                            <span className="text-xl text-sky-100 font-medium mr-16">En stock</span>
                        </div>
                        <div>
                            <p className="mt-10 text-xl text-blue-900 opacity-80">{producto.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;