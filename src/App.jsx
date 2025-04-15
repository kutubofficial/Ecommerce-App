import React from "react";
import Container from "./Container";
import AuthProvider from "./Components/authentication/AuthContext";
import CartContext from "./cartContext/CartContext";

const App = () => {
  return (
    <>
      <AuthProvider>
        <CartContext>
          <Container />
        </CartContext>
      </AuthProvider>
    </>
  );
};

export default App;
