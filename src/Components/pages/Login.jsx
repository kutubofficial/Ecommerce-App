import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authentication/AuthContext";
import "./Login.css";
import toast from "react-hot-toast";
const Login = () => {
  const { login, logout, isLoggedIn } = useContext(AuthContext);
  // console.log( isLoggedIn,login, logout);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    login();
    toast.success("You are logged in!");
  };
  return (
    <>
      <section id="login-container">
        <h2 className="login-title">login page</h2>
        <form id="login-form">
          <div>
            <label>Username :</label>
            <input type="text" placeholder="Enter username" required />
          </div>
          <div>
            <label>Email :</label>
            <input type="email" placeholder="Enter email" required />
          </div>
          <div>
            <label>Password :</label>
            <input type="password" placeholder="Enter password" required />
          </div>
          <button type="submit" id="login-submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        {/* <h1>{isLoggedIn ? toast.success("You are logged in!"); : toast.success("You are logged out!");}</h1>
        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )} */}
      </section>
    </>
  );
};

export default Login;
