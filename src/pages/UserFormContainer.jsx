import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTextHeight, faPhone, faAt } from "@fortawesome/free-solid-svg-icons";

function UserFormContainer() {
    return (
        <main className="bg-blue-900">
            <div className="container min-h-screen w-full flex pb-20">
                <div className="h-4/6 w-full">
                    <div className="bg-blue-900 border-b-2 border-b-yellow h-20 w-full grid grid-cols-12 items-center pb-5 mt-36">
                        <div className="col-span-4 flex justify-start">
                            <h1 className="text-5xl text-white font-bold">Comprador</h1>
                        </div>
                        <div className="col-span-4 flex justify-center">
                            <h2 className="text-2xl text-white font-normal">Datos del comprador</h2>
                        </div>
                        <div className="col-span-4 flex justify-end">
                            <span className="text-3xl text-white"><FontAwesomeIcon icon={faUser} /></span>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-5 mt-10">
                        <div className="col-start-3 col-span-8 min-h-96 border-2 border-yellow py-10">
                            <div className="w-full flex flex-col items-center gap-14">
                                <h1 className="text-5xl text-white font-normal">Ingrese sus datos</h1>
                                <form className="w-full flex flex-col justify-center items-center gap-14">
                                    <div className="w-5/6 h-12 bg-white rounded-xl flex items-center">
                                        <label htmlFor="buyerName" className="p-3">
                                            <FontAwesomeIcon className="text-2xl text-yellow" icon={faTextHeight} />
                                        </label>
                                        <input className="w-full h-full rounded-xl p-5 text-xl font-light outline-none" id="buyerName" type="text" placeholder="Ingrese su nombre y apellido" />
                                    </div>
                                    <div className="w-5/6 h-12 bg-white rounded-xl flex items-center">
                                        <label htmlFor="buyerPhone" className="p-3">
                                            <FontAwesomeIcon className="text-2xl text-yellow" icon={faPhone} />
                                        </label>
                                        <input className="w-full h-full rounded-xl p-5 text-xl font-light outline-none" id="buyerPhone" type="number" placeholder="Ingrese su teléfono" />
                                    </div>
                                    <div className="w-5/6 h-12 bg-white rounded-xl flex items-center">
                                        <label htmlFor="buyerEmail" className="p-3">
                                            <FontAwesomeIcon className="text-2xl text-yellow" icon={faAt} />
                                        </label>
                                        <input className="w-full h-full rounded-xl p-5 text-xl font-light outline-none" id="buyerEmail" type="email" placeholder="Ingrese su correo electrónico" />
                                    </div>
                                    <div className="w-5/6 h-12 flex justify-center items-center">
                                        <button className="w-3/6 h-12 bg-yellow rounded-xl text-white text-xl font-medium hover:bg-yellow-500 ease-linear duration-150" type="submit">Finalizar compra</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default UserFormContainer;