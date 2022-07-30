import { createContext, useState } from "react"

const OrderContext = createContext()

const OrderProvider = ({children}) => {

    const [ order, setOrder ] = useState({
        buyer: {},
        items: [],
        date: "",
        total: 0
    })

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
