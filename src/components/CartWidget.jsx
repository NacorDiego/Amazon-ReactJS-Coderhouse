import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function CartWidget() {
    return (
        <Link to="/cart">
            <button className="flex items-center">
                <FontAwesomeIcon className="text-2xl text-white hover:text-light-300 ease-linear duration-200" icon={faCartShopping} />
            </button>
        </Link>
    );
}

export default CartWidget;