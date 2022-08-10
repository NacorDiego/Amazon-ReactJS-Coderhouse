import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

function LoginFormContainer() {
    return (
        <div className="w-1/2 h-full bg-blue-900 rounded-r-3xl flex flex-col items-center justify-between p-5">
            <div className="w-full flex justify-end">
                <p className="text-lg text-white font-medium mr-14">¿No tenés cuenta de Amazon? <Link to="" className="text-yellow hover:text-yellow-500 ease-linear duration-150">Registrate</Link></p>
            </div>
            <LoginForm />
            <div className="w-full flex justify-center">
                <ul className="w-5/6 flex justify-around items-center">
                    <li className="text-lg text-yellow font-normal hover:text-yellow-500 ease-linear duration-150"><Link to="">Condiciones de uso</Link></li>
                    <li className="text-lg text-yellow font-normal hover:text-yellow-500 ease-linear duration-150"><Link to="">Políticas de privacidad</Link></li>
                    <li className="text-lg text-yellow font-normal hover:text-yellow-500 ease-linear duration-150"><Link to="">Ayuda</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default LoginFormContainer;