import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons';


function ButtonBars() {
    return (
            <button>
                <div className="w-14 h-14 flex flex-row justify-center items-center">
                    <FontAwesomeIcon className="text-white text-2xl" icon={faBars} />
                </div>
            </button>
    );
}

export default ButtonBars;