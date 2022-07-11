import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faKey } from '@fortawesome/free-solid-svg-icons';

function LoginForm() {
    return (
        <div className="w-full flex flex-col items-center gap-14">
            <h1 className="text-5xl text-white font-normal">Iniciar sesión</h1>
            <form className="w-full flex flex-col justify-center items-center gap-14">
                <div className="w-5/6 h-12 bg-white rounded-xl flex items-center">
                    <label htmlFor="loginEmail" className="p-3"><FontAwesomeIcon className="text-2xl text-yellow" icon={ faAt } /></label>
                    <input className="w-full h-full rounded-xl p-5 text-xl font-light outline-none" id="loginEmail" type="email" placeholder="Ingrese su correo" />
                </div>
                <div className="w-5/6 h-12 bg-white rounded-xl flex items-center">
                    <label htmlFor="loginPass" className="p-3"><FontAwesomeIcon className="text-2xl text-yellow" icon={ faKey } /></label>
                    <input className="w-full h-full rounded-xl p-5 text-xl font-light outline-none" id="loginPass" type="password" placeholder="Ingrese su contraseña" />
                </div>
                <div className="w-5/6 h-12 flex justify-center items-center">
                    <button className="w-3/6 h-12 bg-yellow rounded-xl text-white text-xl font-medium hover:bg-yellow-500 ease-linear duration-150" type="submit">Iniciar sesión</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;