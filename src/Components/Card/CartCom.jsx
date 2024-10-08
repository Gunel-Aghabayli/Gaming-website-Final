import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../AppContext";
import style from "./CartCom.module.css";
import { toast } from "react-toastify";
import { supabase } from "../../supabase.js";
import Navbar from "../Navbar/Navbar.jsx";
import { useTheme } from "../../ThemeContext";

const CartCom = () => {
  const { darkMode } = useTheme();
  const { cart, removeFromCart, updateCartItem } = useAppContext();
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculatedTotal = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setTotalPrice(calculatedTotal);
  }, [cart]);

  const handleIncrement = (productId) => {
    const product = cart.find(item => item.id === productId);
    if (product) {
      updateCartItem(productId, product.quantity + 1);
    }
  };

  const handleDecrement = (productId) => {
    const product = cart.find(item => item.id === productId);
    if (product && product.quantity > 1) {
      updateCartItem(productId, product.quantity - 1);
    }
  };

  const handlePurchaseAll = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const allProductsParams = cart.map(product => 
        `product=${encodeURIComponent(JSON.stringify(product))}`
      ).join('&');
      navigate(`/checkout?${allProductsParams}`);
    } else {
      alert("Please login to make a purchase.");
      navigate("/login");
    }
  };

  const handleSinglePurchase = async (product) => {
    const { data: { user } } = await supabase.auth.getUser();  
    if (user) {
      const productParams = `product=${encodeURIComponent(JSON.stringify(product))}`;
      navigate(`/checkout?${productParams}`);
    } else {
      alert("Please login to make a purchase.");
      navigate("/login");
    }
  };
  
  

  return (
    <div className={darkMode ? style.darkMode : style.lightMode}>
      <div>
        <div className={style.bgabout}>
          <Navbar />
          <div className={style.content}>
            <h1>
              SHOPPING <span>CART</span>
            </h1>
          </div>
        </div>
        <div className={style.allBoxes}>
          {cart.length > 0 ? (
            cart.map((product, index) => (
              <div key={index} className={style.cart}>
                <div>
                  <img src={product.image} alt={product.title} />
                  <h3>${(product.price * product.quantity).toFixed(2)}</h3>
                </div>
                <div className={style.butons}>
                  <div>
                    <Link to={`/shops/products?product=${product.id}`}>
                      {product.title}
                    </Link>
                  </div>
                  <div className={style.quantity}>
                    <button onClick={() => handleDecrement(product.id)}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => handleIncrement(product.id)}>+</button>
                  </div>
                  <div className={style.allBtn}>
                    <button
                      className={style.btn3}
                      onClick={() => removeFromCart(product)}
                    >
                      Remove
                    </button>
                    <button className={style.btn3} onClick={() => handleSinglePurchase(product)}>
                    Purchase
                  </button>
                    <button
                      className={style.btn3}
                      onClick={() => navigate("/shop")}
                    >
                      Back to Shop
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={style.emptyCart}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/13791/13791767.png"
                width="200px"
                height="200px"
                alt="empty cart"
              />
              <p className={style.noItem}>Your cart is currently empty</p>
              <Link to="/shop">RETURN TO SHOP</Link>
            </div>
          )}
        </div>
        <div className={style.totalPrice}>
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
          <button className={style.btn4} onClick={handlePurchaseAll}>
          Purchase All
        </button>
        </div>
      </div>
      <div className={style.container}>
      <div className={style.flexContainer}>
          <div className={style.qamico}>
            <a href="../../Pages/Home.jsx" className={style.brand}>
              <img
                src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/logo_light.svg"
                className={style.logo}
              />
            </a>
            <p>
              Qamico is an independent game studio making original games for PC,
              consoles, and mobile platforms.
            </p>
            <hr />
            <div className={style.location}>
              <i class="fa-regular fa-building"></i>
              <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
            </div>
          </div>
          <div className={style.footerLinks}>
            <h5>Our Studio</h5>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact us</Link>
           </div>
          <div className={style.footerLinks}>
            <h5>Services</h5>
            <Link to='/shop'>Shop</Link>
            <Link to='/faq'>FAQ</Link>
          </div>
          <div className={style.footerContact}>
            <h5>Say Hello</h5>
            <p>hello@example.com</p>
            <p>+123 888 000 33</p>
          </div>
        </div>
        <div className={style.footerBottom}>
          <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/ft-img.png" />
          <span>© 2023 Qamico™. All Rights Reserved.</span>
          <div className={style.socialIcons}>
            <a href="#" className={style.icon}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className={style.icon}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className={style.icon}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className={style.icon}>
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCom;


