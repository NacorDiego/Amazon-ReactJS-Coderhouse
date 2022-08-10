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
        errors.phone = "El campo 'Teléfono' es requerido"
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
                    <form className="w-full flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                        <div className="w-5/6 h-24 relative">
                            <div className="w-full h-12 bg-white rounded-xl flex items-center">
                                <label htmlFor="iname" className="p-3">
                                    <FontAwesomeIcon className="text-2xl text-yellow" icon={faUser} />
                                </label>
                                <input className="w-full h-full rounded-xl p-5 text-xl font-light outline-none" name="name" type="text" id="iname" placeholder="Nombre y apellido" onBlur={handleBlur} onChange={handleChange} value={form.name} />
                            </div>
                            {errors.name && <p className="text-error mt-3 text-center">{errors.name}</p>}
                        </div>
                        <div className="w-5/6 h-24 relative">
                            <div className="w-full h-12 bg-white rounded-xl flex items-center">
                                <label htmlFor="iphone" className="p-3">
                                    <FontAwesomeIcon className="text-2xl text-yellow" icon={faPhone} />
                                </label>
                                <input className="w-full h-full rounded-xl p-5 text-xl font-light outline-none" name="phone" type="text" id="iphone" placeholder="(11)55551122 " onBlur={handleBlur} onChange={handleChange} value={form.phone} />
                            </div>
                            {errors.phone && <p className="text-error mt-3 text-center">{errors.phone}</p>}
                        </div>
                        <div className="w-5/6 h-24 relative">
                            <div className="w-full h-12 bg-white rounded-xl flex items-center">
                                <label htmlFor="iemail" className="p-3">
                                    <FontAwesomeIcon className="text-2xl text-yellow" icon={faAt} />
                                </label>
                                <input className="w-full h-full rounded-xl p-5 text-xl font-light outline-none" name="email" type="email" id="iemail" placeholder="correo@ejemplo.com" onBlur={handleBlur} onChange={handleChange} value={form.email} />
                            </div>
                            {errors.email && <p className="text-error mt-3 text-center">{errors.email}</p>}
                        </div>
                        <div className="w-5/6 h-12 flex justify-center items-center mt-4">
                            <input type="submit" value="Finalizar compra" className="w-3/6 h-12 bg-sky-100 rounded-xl text-white text-xl font-medium hover:bg-sky ease-linear duration-150" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BuyerForm;