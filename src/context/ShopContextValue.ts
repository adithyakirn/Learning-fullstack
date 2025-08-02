import { createContext } from "react";
import { products } from "../assets/assets";

export type ShopContextType = {
  products: typeof products;
  currency: string;
  delivery_fee: number;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ShopContext = createContext<ShopContextType | null>(null);
