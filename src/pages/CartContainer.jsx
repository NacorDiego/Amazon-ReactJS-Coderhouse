import { useContext } from "react";
import CartContext from "../store/cart-context";


function CartContainer() {

    const { totalValue } = useContext(CartContext)

    return (
        <div className="container h-screen w-full flex items-center">
            <div className="h-4/6 w-full grid grid-rows-4 grid-flow-col gap-8 mt-20">
                <div className="bg-sky col-span-4"></div>
                <div className="bg-sky col-span-3 row-span-3"></div>
                <div className="bg-sky col-span-1 row-span-1"></div>
                <div className="bg-sky col-span-1 row-span-2">
                    <span>{totalValue}</span>
                </div>
            </div>
        </div>
    );
}

export default CartContainer;