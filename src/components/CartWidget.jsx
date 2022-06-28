import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
    return (
        <FontAwesomeIcon className="text-2xl text-white" icon={faCartShopping} />
    );
}

export default CartWidget;