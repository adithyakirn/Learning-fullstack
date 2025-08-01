import { createContext, type ReactNode } from "react";
import { products } from "../assets/assets";

type ShopContextType = {
    products: typeof products
    currency: string
    delivery_fee: number
}

export const ShopContext = createContext<ShopContextType | null>(null)
type ShopProviderProps = {
    children : ReactNode
}
const ShopContextProvider = ({children} : ShopProviderProps)  => {

    const currency = '$'
    const delivery_fee = 10
    const value : ShopContextType = {
        products, currency, delivery_fee
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider