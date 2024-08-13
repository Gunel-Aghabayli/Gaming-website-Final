import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some(item => item.id === product.id)) {
        const updatedWishlist = [...prevWishlist, product];
        console.log('Added to Wishlist:', updatedWishlist);
        return updatedWishlist;
      }
      return prevWishlist;
    });
  };

  const removeFromWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((item) => item.id !== product.id);
      console.log('Removed from Wishlist:', updatedWishlist);
      return updatedWishlist;
    });
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      if (!prevCart.some(item => item.id === product.id)) {
        const updatedCart = [...prevCart, product];
        console.log('Added to Cart:', updatedCart);
        return updatedCart;
      }
      return prevCart;
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== product.id);
      console.log('Removed from Cart:', updatedCart);
      return updatedCart;
    });
  };

  return (
    <AppContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, cart, addToCart, removeFromCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
