"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  img: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const userId = "guest-1"; 

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // 🟢 لود اولیه از API وقتی صفحه لود میشه
useEffect(() => {
  const fetchCart = async () => {
    try {
      const res = await fetch(`/api/cart?userId=${userId}`);
      const data = await res.json();
      if (data.success && data.cart) {
        const items = (data.cart.items || []).map((item: any) => ({
          id: item.id || item.product?._id || item.product, 
          name: item.name,
          price: item.price,
          img: item.img,
          quantity: item.quantity,
        }));
        setCart(items);
      }
    } catch (err) {
      console.error(err);
    }
  };
  fetchCart();
}, []);


  // 🟢 ذخیره در API وقتی cart تغییر کرد
  useEffect(() => {
    const saveCart = async () => {
      try {
        await fetch("/api/cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, items: cart }),
        });
      } catch (err) {
        console.error(err);
      }
    };

    if (cart.length > 0) saveCart();
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart باید داخل CartProvider استفاده شود");
  return context;
};
