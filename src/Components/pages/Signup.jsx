import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate("/login");
      toast.success("You are signed up!");
    };
  return (
    <>
    <section id="login-container">
      <h2 className="signup-title">sign-up page</h2>
      <form id="login-form">
      <div>
          <label>Name :</label>
          <input type="text" placeholder="Enter name" required/>
        </div>
        <div>
          <label>Username :</label>
          <input type="text" placeholder="Enter username" required/>
        </div>
        <div>
          <label>Email :</label>
          <input type="email" placeholder="Enter email" required/>
        </div>
        <div>
          <label>Password :</label>
          <input type="password" placeholder="Enter password" required/>
        </div>
        <button type="submit" id="login-submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </section>
  </>
  );
};

export default Signup;
