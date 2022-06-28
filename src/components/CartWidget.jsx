import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
    return (
        <button className="flex items-center">
            <FontAwesomeIcon className="text-2xl text-white" icon={faCartShopping} />
        </button>
    );
}

export default CartWidget;