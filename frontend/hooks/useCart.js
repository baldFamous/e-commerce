import { createContext, useContext, useState } from 'react';

const CartContext = createContext([]);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.product.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.product.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeItem = (productId) => {
    setItems((prev) => prev.filter((p) => p.product.id !== productId));
  };

  const clear = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
