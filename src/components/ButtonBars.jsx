import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons';


function ButtonBars() {
    return (
            <button>
                <div className="w-14 h-14 flex flex-row justify-center items-center text-white text-2xl hover:text-light-300 ease-linear duration-200">
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </button>
    );
}

export default ButtonBars;