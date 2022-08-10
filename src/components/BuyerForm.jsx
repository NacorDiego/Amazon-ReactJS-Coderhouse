// import { useState } from "react";
// import { Link } from "react-router-dom";
// import CartContext from "../store/cart-context";
// import Swal from "sweetalert2";
// import { pushOrder, updateStock } from "../services/firestore";
// import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faAt } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "../hooks/useForm";

const initialForm = {
    name: "",
    phone:"",
    email: ""
}

const validationsForm = (form) => {
    let errors = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    let regexPhone = /^((\(?\d{3}\)?[-. ]?\d{4})|(\(?\d{4}\)?[-. ]?\d{3})|(\(?\d{5}\)?[-. ]?\d{2}))[-. ]?\d{4}$/
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/

    if (!form.name.trim()){ //.trim() evita los espacios en blanco al inicio y al final
        errors.name = "El campo 'Nombre y apellido' es requerido"
    } else if (!regexName.test(form.name.trim())){
        errors.name = "El campo 'Nombre y apellido' solo acepta letras y espacios en blanco"
    }

    if (!form.phone.trim()){ //.trim() evita los espacios en blanco al inicio y al final
        errors.phone = "El campo 'TeléfonoPhone es requerido"
    } else if (!regexPhone.test(form.phone.trim())){
        errors.phone = "El campo 'Teléfono' debe respetar el formato indicado"
    }

    if (!form.email.trim()){ //.trim() evita los espacios en blanco al inicio y al final
        errors.email = "El campo 'Correo electrónico' es requerido"
    } else if (!regexEmail.test(form.email.trim())){
        errors.email = "El campo 'Correo electrónico' no es válido"
    }

    return errors
}

function BuyerForm() {

    // const { order, setOrder } = useContext(OrderContext)
    // const { clearCart } = useContext(CartContext)

    // const [ newName, setNewName ] = useState("")
    // const [ newPhone, setNewPhone ] = useState("")
    // const [ newEmail, setNewEmail ] = useState("")

    // const navigate = useNavigate()

    // const nameHandler = (event) => {
    //     setNewName(event.target.value)
    // }

    // const phoneHandler = (event) => {
    //     setNewPhone(event.target.value)
    // }

    // const emailHandler = (event) => {
    //     setNewEmail(event.target.value)
    // }

    // const showAlert = (id) => {
    //     Swal.fire({
    //         title:'Compra finalizada',
    //         text:`${newName} su compra #${id} será procesada a la brevedad.`,
    //         icon:'success'
    //     })
    // }

    // async function submitHandler (event) {
    //     event.preventDefault()
    //     const buyer = {
    //         name: newName,
    //         phone: newPhone,
    //         email: newEmail
    //     }
    //     order.buyer = buyer
    //     let fecha = new Date()
    //     order.date = fecha.toLocaleString()
    //     setOrder(order)
    //     await pushOrder(order,showAlert)
    //     order.items.map(e => {
    //        updateStock(e.id, e.cantidad)
    //     })
    //     clearCart()
    //     navigate("/",true)
    // }

    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm, validationsForm)

    return (
        <div className="grid grid-cols-12 gap-5 mt-10">
            <div className="col-start-3 col-span-8 min-h-96 border-2 rounded-2xl border-yellow py-16">
                <div className="w-full flex flex-col items-center gap-14">
                    <h1 className="text-5xl text-white font-normal">Ingrese sus datos</h1>
                    <form className="w-full flex flex-col justify-center items-center gap-14" onSubmit={handleSubmit}>
                        <div className="w-5/6 h-12 bg-white rounded-xl flex items-center">
                            <label htmlFor="buyerName" className="p-3">
                                <FontAwesomeIcon className="text-2xl text-yellow" icon={faUser} />
                            </label>
                            <input className="w-full h-full rounded-xl p-5 text-xl font-light outline-none" name="name" type="text" placeholder="Ingrese su nombre y apellido" onBlur={handleBlur} onChange={handleChange} value={form.name} required />
                        </div>
                        {errors.name && <p className="text-light-100">{errors.name}</p>}
                        <div className="w-5/6 h-12 bg-white rounded-xl flex items-center">
                            <label htmlFor="buyerPhone" className="p-3">
                                <FontAwesomeIcon className="text-2xl text-yellow" icon={faPhone} />
                            </label>
                            <input className="w-full h-full rounded-xl p-5 text-xl font-light outline-none" name="phone" type="text" placeholder="Ingrese su teléfono" onBlur={handleBlur} onChange={handleChange} value={form.phone} required />
                        </div>
                        {errors.phone && <p className="text-light-100">{errors.phone}</p>}
                        <div className="w-5/6 h-12 bg-white rounded-xl flex items-center">
                            <label htmlFor="buyerEmail" className="p-3">
                                <FontAwesomeIcon className="text-2xl text-yellow" icon={faAt} />
                            </label>
                            <input className="w-full h-full rounded-xl p-5 text-xl font-light outline-none" name="email" type="email" placeholder="Ingrese su correo electrónico" onBlur={handleBlur} onChange={handleChange} value={form.email} required />
                        </div>
                        {errors.email && <p className="text-light-100">{errors.email}</p>}
                        <div className="w-5/6 h-12 flex justify-center items-center">
                            <input type="submit" value="Finalizar compra" className="w-3/6 h-12 bg-sky-100 rounded-xl text-white text-xl font-medium hover:bg-sky ease-linear duration-150" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BuyerForm;