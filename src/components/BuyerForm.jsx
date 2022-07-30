import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faAt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useContext } from "react";
import OrderContext from "../store/order-context";

function BuyerForm() {

    const { order, setOrder } = useContext(OrderContext)

    const [ newName, setNewName ] = useState("")
    const [ newPhone, setNewPhone ] = useState("")
    const [ newEmail, setNewEmail ] = useState("")

    const nameHandler = (event) => {
        setNewName(event.target.value)
    }

    const phoneHandler = (event) => {
        setNewPhone(event.target.value)
    }

    const emailHandler = (event) => {
        setNewEmail(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const buyer = {
            name: newName,
            phone: newPhone,
            email: newEmail
        }

        order.buyer = buyer

        let fecha = new Date()

        order.date = fecha.toLocaleString()

        console.log(order)

        setOrder(order)
    }

    return (
        <div className="grid grid-cols-12 gap-5 mt-10">
            <div className="col-start-3 col-span-8 min-h-96 border-2 rounded-2xl border-yellow py-16">
                <div className="w-full flex flex-col items-center gap-14">
                    <h1 className="text-5xl text-white font-normal">Ingrese sus datos</h1>
                    <form className="w-full flex flex-col justify-center items-center gap-14" onSubmit={submitHandler}>
                        <div className="w-5/6 h-12 bg-white rounded-xl flex items-center">
                            <label htmlFor="buyerName" className="p-3">
                                <FontAwesomeIcon className="text-2xl text-yellow" icon={faUser} />
                            </label>
                            <input className="w-full h-full rounded-xl p-5 text-xl font-light outline-none" id="buyerName" type="text" placeholder="Ingrese su nombre y apellido" onChange={nameHandler} />
                        </div>
                        <div className="w-5/6 h-12 bg-white rounded-xl flex items-center">
                            <label htmlFor="buyerPhone" className="p-3">
                                <FontAwesomeIcon className="text-2xl text-yellow" icon={faPhone} />
                            </label>
                            <input className="w-full h-full rounded-xl p-5 text-xl font-light outline-none" id="buyerPhone" type="number" placeholder="Ingrese su teléfono" onChange={phoneHandler} />
                        </div>
                        <div className="w-5/6 h-12 bg-white rounded-xl flex items-center">
                            <label htmlFor="buyerEmail" className="p-3">
                                <FontAwesomeIcon className="text-2xl text-yellow" icon={faAt} />
                            </label>
                            <input className="w-full h-full rounded-xl p-5 text-xl font-light outline-none" id="buyerEmail" type="email" placeholder="Ingrese su correo electrónico" onChange={emailHandler} />
                        </div>
                        <div className="w-5/6 h-12 flex justify-center items-center">
                            <button className="w-3/6 h-12 bg-yellow rounded-xl text-white text-xl font-medium hover:bg-yellow-500 ease-linear duration-150" type="submit">Finalizar compra</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BuyerForm;