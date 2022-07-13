import { createContext, useState } from "react"


const CartContext = createContext()

const CartProvider = ({children}) => {

    const [itemsInCart, setItemsInCart] = useState([])

    const isInCart = () => {
        
    }

    const data = {}

    return(
        <CartContext.Provider value={data}>{children}</CartContext.Provider>
    )
}

export {CartProvider}
export default CartContext
