import { useState, type ReactNode } from "react";
import { products } from "../assets/assets";
import { ShopContext, type ShopContextType } from "./ShopContextValue";

type ShopProviderProps = {
    children: ReactNode
}

const ShopContextProvider = ({ children }: ShopProviderProps) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const value: ShopContextType = {
        products,
        currency,
        delivery_fee,
        search, setSearch, showSearch, setShowSearch
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;