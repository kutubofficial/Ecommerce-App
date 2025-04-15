import React from "react";
import "./module_navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../authentication/AuthContext";
import { BiShoppingBag } from "react-icons/bi";
const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <nav>
        <li className="logo" id="logo" title="My-shop-logo">
          <a href="/">
            <span className="title">
              <BiShoppingBag id="logo-icon" />
              My
            </span>
            Shop
          </a>
        </li>
        <li className="search" id="search-box">
          <input type="search" placeholder="search here.." />
        </li>
        <li>
          <Link to="/">home</Link>
        </li>

        {isLoggedIn ? (
          <>
            <li>
              <Link to="/cart">
                cart<sup id="cart-count">0</sup>
              </Link>
            </li>
            <li>
              <Link to="/login"> logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signup">signup</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
