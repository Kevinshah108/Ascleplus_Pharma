import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1. Load Safe Cart
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('cartItems');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return []; // Return empty if parsing fails
    }
  });
  
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // --- HELPER: GET ID ---
  // This ensures we always get a valid ID, whether it's _id or id
  const getId = (product) => product._id || product.id;

  const addToCart = (product) => {
    if (!user) {
      if(window.confirm("Please Login to add items!")) navigate('/login');
      return;
    }

    const targetId = getId(product);

    setCartItems(prev => {
      const existing = prev.find(item => getId(item) === targetId);
      if (existing) {
        // Increment Qty
        return prev.map(item => getId(item) === targetId ? { ...item, qty: item.qty + 1 } : item);
      }
      // Add New
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => getId(item) !== productId));
  };

  const updateQty = (productId, delta) => {
    setCartItems(prev => prev.map(item => {
      if (getId(item) === productId) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : item;
      }
      return item;
    }));
  };

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tax = subtotal * 0.18; 
  const discountPercentage = user?.isFirstOrder ? 0.25 : 0;
  const discountAmount = subtotal * discountPercentage;
  const total = subtotal + tax - discountAmount;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty, subtotal, tax, discountAmount, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);