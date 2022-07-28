import { createContext, useState } from "react"

const OrderContext = createContext()

const OrderProvider = ({children}) => {

    const [ order, setOrder ] = useState({})

    const data = {
        order,
        setOrder
    }

    return (
        <OrderContext.Provider value={data}>{children}</OrderContext.Provider>
    )

}

export { OrderProvider }
export default OrderContext
