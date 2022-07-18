import { createContext, useState } from "react"


const CartContext = createContext()

const CartProvider = ({children}) => {

    // Funciones a definir: addToCart, removeFromCart, clearCart, isInCart

    // const ejemploCarrito = [
    //     {
    //         producto: {
    //             nombre: '',
    //             precio: '',
    //             img: ''
    //             id: ''
    //         },
    //         cantidad: 5
    //     },
    //     {
    //         producto: {
    //             nombre: '',
    //             precio: '',
    //             img: ''
    //             id: ''
    //         },
    //         cantidad: 5
    //     },
    //     {
    //         producto: {
    //             nombre: '',
    //             precio: '',
    //             img: ''
    //             id: ''
    //         },
    //         cantidad: 5
    //     }
    // ]

    const [cart, setCart] = useState([])

    const clearCart = () => {

        setCart([])

    }

    //? Esta función se llama cuando se presiona el bonton Agregar Carrito
    const addToCart = (producto, cantidad) => {

        console.log('Se ejecuta la función addToCart')
        if (isInCart(producto.id)) { //Verifico si el producto existe en el carrito.
            const newCart = [...cart] //Hago copia del carrito con spread operator.
            for( const elemento of newCart) { //Busco cual producto del carrito coincide con el producto que estoy agregando.
                if (elemento.producto.id === producto.id) {
                    elemento.cantidad = elemento.cantidad + cantidad //Cuando lo encontramos, le sumamos la cantidad
                    break
                }
            }
            setCart(newCart)
        } else {
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

    }

    const isInCart = (id) => {

        return cart.find((elemento) => elemento.producto.id === id)

    }

    //? Elimina el item del cart que se corresponde con el id que le llega como parametro.
    const removeItemInCart = (id) => {

        if (isInCart(id)) { //Verifico si el producto existe en el carrito.
            const newCart = [...cart] //Hago copia del carrito con spread operator.
            for( const [i,elemento] of newCart) { //Busco cual producto del carrito coincide con el producto que estoy agregando.
                if (elemento.producto.id === id) {
                    newCart.splice(i,1) //Cuando lo encontramos, le sumamos la cantidad
                    break
                }
            }
            setCart(newCart)
        }

    }

    const data = {
        cart,
        clearCart,
        addToCart,
        removeItemInCart
    }

    return(
        <CartContext.Provider value={data}>{children}</CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext
