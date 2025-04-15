import React, { useState, useEffect } from "react";
import "./module_section.css";
import axios from "axios";
import Footer from "../../layout/Footer";
import { cartData } from "../../../cartContext/CartContext";
import { useContext } from "react";

const HomeSection = () => {
  let { cartItems, setCartItems } = useContext(cartData);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");
      // console.log("Products fetched:", response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  // console.log("Products:", products);  //just to check if products are fetched
  const addToCart = (id) => {
    console.log("item added", id); //
    let exisitingProduct = cartItems?.find((ele) => {
      return ele.id === products.id; 
    });
    console.log(cartItems);
    
  };
  return (
    <section id="homeContainer">
      <video src="../../assets/homepage3.mp4" autoPlay loop muted />
      <article>
        <h1>
          Welcome to <br />
          <span className="title">My</span>shop
        </h1>
        <a href="#productsContainer" className="button">
          Go Shopping
        </a>
      </article>
      <div id="productsContainer">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            {/* <p>{product.description}</p>   */}
            <p>${product.price}</p>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default HomeSection;
