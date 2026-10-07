import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  id:string;
  name: string;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (name: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);     

export default function CartProvider({children}:{children:ReactNode}) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addItem(name:string){
    setItems((current) => [                                         // current: list already in list
      ...current,                                                   // ' ... ' copies current list
      { id: `${name}-${Date.now()}`, name },                        // this object aftre followed current is the new one. "Taco-1759857600000"

    ]);
  }

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