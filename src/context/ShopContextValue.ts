import { createContext } from "react";
import { products } from "../assets/assets";
import type { CartType } from "./ShopContext";
import type { NavigateFunction } from "react-router-dom";

export type ShopContextType = {
  products: typeof products;
  currency: string;
  delivery_fee: number;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartType;
  addToCart: (itemId: string, size: string) => Promise<void>;
  getCartCount: () => number;
  updateQuantity: (
    itemId: string,
    size: string,
    quantity: number
  ) => Promise<void>;
  getCartAmount: () => number;
  navigate: NavigateFunction
};

export type cartItemData = {
  id: string;
  size: string;
  quantity: number;
};

export const ShopContext = createContext<ShopContextType | null>(null);
