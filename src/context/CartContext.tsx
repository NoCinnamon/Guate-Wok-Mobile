import { createContext, useContext, useState, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

type CartItem = {
  id:string;
  name: string;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (name: string) => void;
};

const storeCartItem = async (items:  CartItem[]) => {
  try {
    await AsyncStorage.setItem('cartItems', JSON.stringify(items));
  } catch (e) {
    // saving error
  }
}
const CartContext = createContext<CartContextValue | null>(null);     

export default function CartProvider({children}:{children:ReactNode}) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItem(name:string){
    setItems((current) => {                                         
      const next = [                                                // current: list already in list
      ...current,                                                   // ' ... ' copies current list
      { id: `${name}-${Date.now()}`, name },                        // this object aftre followed current is the new one. "Taco-1759857600000"
      ];
      storeCartItem(next);
      return next;
    });
  }

  async function loadCartItem() {
    const saved = await AsyncStorage.getItem("cartItems");
    console.log("saved cart items:", saved);
    if (saved !== null) {
      setItems(JSON.parse(saved));
    }
  }
  useEffect(() => {
    loadCartItem();
  }, []);

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const value = useContext(CartContext);
  if (!value) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return value;
}

