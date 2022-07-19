import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../store/cart-context";

function CartWidget() {

    let { cantidad } = useContext(CartContext)

    // const [ cantidad, setCantidad ] = useState(0)

    // const getQuantity = () => {
    //     let quantity = 0
    //     cart.map(e => quantity += e.quantity)
    //     setCantidad(quantity)
    //     return cantidad
    // }

    return (
        <Link to="/cart">
            <button className="flex items-center" >
                <FontAwesomeIcon className="text-2xl text-white hover:text-light-300 ease-linear duration-200" icon={faCartShopping} />
                <span className="text-2xl text-white ml-2">{cantidad}</span>
            </button>
        </Link>
    );
}

export default CartWidget;