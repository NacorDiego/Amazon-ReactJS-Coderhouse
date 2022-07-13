import { createContext, useState } from "react"


const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    // Funciones a definir: addToCart, removeFromCart, clearCart, isInCart

    // const ejemploCarrito = [
    //     {
    //         producto: {
    //             nombre: '',
    //             precio: '',
    //             img: ''
    //         },
    //         cantidad: 5
    //     },
    //     {
    //         producto: {
    //             nombre: '',
    //             precio: '',
    //             img: ''
    //         },
    //         cantidad: 5
    //     },
    //     {
    //         producto: {
    //             nombre: '',
    //             precio: '',
    //             img: ''
    //         },
    //         cantidad: 5
    //     }
    // ]

    const clearCart = () => {

        setCart([])

    }

    //? Esta función se llama cuando se presiona el bonton Agregar Carrito
    const addToCart = (producto, cantidad) => {

        setCart(
            [
                ...cart,
                {
                    producto: producto,
                    cantidad: cantidad
                }
            ]
        )

    }

    const data = {
        clearCart,
        addToCart
    }
    return(
        <CartContext.Provider value={data}>{children}</CartContext.Provider>
    )
}

export {CartProvider}
export default CartContext
