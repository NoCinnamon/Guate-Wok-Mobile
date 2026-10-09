import { createContext, useContext, useState, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

type CartItem = {
  id:string;
  name: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (name: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
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
    setItems((current) => {                                                                             // current: list already in list
      const alreadyThere = current.find((item) => item.name === name);                                     
      const next: CartItem[] = [];
      if ( alreadyThere ){
        for (const item of current) {
          if(item.name === name) {
            next.push({
              id: item.id,
              name: item.name,
              quantity: item.quantity + 1,
            });
          } else {
              next.push(item);
            }
        }
      } else {
          for (const item of current) {
            next.push(item);
          }
          next.push({
            id: name,
            name: name,
            quantity: 1,
          });
        }
      storeCartItem(next);
      return next;
    });
  }

  function increaseQuantity(id: string) {
    setItems((current) => {
      const next: CartItem[] = [];
      for (const item of current) {
        if (item.id === id) {
          next.push({
            id: item.id,
            name: item.name,
            quantity: item.quantity + 1,
          });
        } else {
          next.push(item);
        }
      }
      storeCartItem(next);
      return next;
    });
  }

  function decreaseQuantity(id: string) {
    setItems((current) => {
      const next: CartItem[] = [];
      for (const item of current) {
        if (item.id === id) {
          next.push({
            id: item.id,
            name: item.name,
            quantity: item.quantity - 1,
          });
        } else {
          next.push(item);
        }
      }
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
    <CartContext.Provider value={{ items, addItem, increaseQuantity, decreaseQuantity }}>
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

