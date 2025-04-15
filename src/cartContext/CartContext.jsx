import React, { useState } from "react";
import { createContext } from "react";

export let cartData = createContext();
const CartContext = ({ children }) => {
  let [cartItems, setCartItems] = useState(null);

  return (
    <cartData.Provider value={{ cartItems, setCartItems }}>
      {children}
    </cartData.Provider>
  );
};

export default CartContext; 
