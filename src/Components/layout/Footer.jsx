import React from "react";
import { FaLinkedin, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <article>
          <h2>Let's Connect!</h2>
          <p>
            Stay updated with the latest trends and updates. Subscribe to our newsletter by entering your email below.
          </p>
          <div className="newsletter">
            <input type="text" placeholder="Type your e-mail here..." />
            <button>Join</button>
          </div>
        </article>
        <ul className="social">
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
        </ul>
        <p className="templete">&copy; 2024 MyShop. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
