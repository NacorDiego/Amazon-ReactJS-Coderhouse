import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';

function ButtonAddToCart({ onAdd }) {
    return (
        <button onClick={onAdd} className="w-14 h-7 flex justify-center items-center border-2 border-sky-100 hover:bg-sky-100 hover:text-blue-700 rounded-full text-lg text-sky-100">
            <FontAwesomeIcon icon={faCartPlus} />
        </button>
        // <button className="w-14 h-14 flex justify-center items-center border-2 border-sky-100 hover:bg-sky-100 hover:text-blue-700 rounded-full text-2xl text-sky-100">
        //     <FontAwesomeIcon icon={faCartPlus} />
        // </button>
    );
}

export default ButtonAddToCart;