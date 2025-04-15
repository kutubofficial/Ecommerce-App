import React from "react";
import Navbar from "./Components/layout/Navbar";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Signup from "./Components/pages/Signup";
import Login from "./Components/pages/Login";
import HomeSection from "./Components/pages/sections/HomeSection";
import Footer from "./Components/layout/Footer";
import toast, { Toaster } from "react-hot-toast";
import Cart from "./Components/pages/cart/Cart";
const Container = () => {
  return (
    <div>
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeSection />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Logout />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default Container;

const Logout = () => {
  const navigate = useNavigate();
  const handleOut = () => {
    // localStorage.removeItem("token");
    window.location.href = "/login";
    navigate("/login");
    toast.success("You have been logged out");
  };

  return (
    <div>
      <h1>
        <button
          onClick={() => {
            handleOut();
          }}
        ></button>
      </h1>
    </div>
  );
};
