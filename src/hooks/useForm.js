import { useState } from "react"
import Swal from "sweetalert2";
import { pushOrder, updateStock } from "../services/firestore";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import OrderContext from "../store/order-context";
import CartContext from "../store/cart-context";


export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)

    const { order, setOrder } = useContext(OrderContext)
    const { clearCart } = useContext(CartContext)


    const navigate = useNavigate()


    const showAlert = (id) => {
        Swal.fire({
            title:'Compra finalizada',
            text:`${form.name} su compra Nº ${id} será procesada a la brevedad.`,
            icon:'success'
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validateForm(form))
    }

    function handleSubmit (e){
        e.preventDefault()
        setErrors(validateForm(form))

        if (Object.keys(errors).length === 0) {
            const buyer = {
                name: form.name,
                phone: form.phone,
                email: form.email
            }
            order.buyer = buyer
            let fecha = new Date()
            order.date = fecha.toLocaleString()
            setOrder(order)
            pushOrder(order,showAlert)
            order.items.map(e => {
                updateStock(e.id, e.cantidad)
            })
            setLoading(true)
            clearCart()
            navigate("/",true)
        }
    }

    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }
}
