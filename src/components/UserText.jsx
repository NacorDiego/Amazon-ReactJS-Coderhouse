import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
function UserText({nombre}) {
    return (
        <div className="flex flex-col justify-center items-start">
            <span className="text-white text-sm">Bienvenido, {nombre}</span>
            <span className="text-white font-semibold">Cuenta y configuración <FontAwesomeIcon icon={faAngleDown} /></span>
        </div>
    );
}

export default UserText;