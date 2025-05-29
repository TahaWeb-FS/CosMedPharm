import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

// Key used for local storage
const CART_STORAGE_KEY = 'shopping_cart';

export const CartProvider = ({ children }) => {
  // Initialize state from localStorage if available
  const [cart, setCart] = useState(() => {
    if (typeof window === 'undefined') return [];
    
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      } catch (error) {
        console.error('Error saving cart to localStorage:', error);
      }
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // New function to update quantity of an item
  const updateQuantity = (id, newQuantity) => {
    // Ensure quantity is valid
    if (newQuantity < 1) return;
    
    setCart(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  // Calculate cart total items
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity,
      cartItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);