import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../AppContext";
import style from "./CartCom.module.css";
import { toast } from "react-toastify";
import { supabase } from "../../supabase.js";
import Navbar from "../Navbar/Navbar.jsx";

const CartCom = () => {
  const { cart, removeFromCart } = useAppContext();
  const navigate = useNavigate();

  const handlePurchase = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      toast.success("Added successfully to Cart");

      cart.forEach((product) => removeFromCart(product));
    } else {
      alert("Please login to make a purchase.");
      navigate("/login");
    }
  };
  return (
    <div>
      <div>
        <div className={style.bgabout}>
          <Navbar />
          <div className={style.content}>
            <h1>
              SHOPPING <span>CART</span>
            </h1>
          </div>
        </div>
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <div key={index} className={style.cart}>
            
              <img src={product.image} />
              <Link to={`/shops/products?product=${product.id}`}>
                {product.title}
              </Link>
              <h3>${product.price}</h3>
              <button className={style.btn3} onClick={() => removeFromCart(product)}>Remove</button>
              <button  className={style.btn3} onClick={handlePurchase}>Purchase</button>
              <button className={style.btn3} onClick={() => navigate("/shop")}>Back to Shop</button>
            </div>
          ))
        ) : (
          <p className={style.noItem}>OOPS..!No products in the cart</p>
        )}
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
          <Link>Home</Link>
          <Link>About Us</Link>
          <Link>Blog</Link>
        </div>
        <div className={style.footerLinks}>
          <h5>Services</h5>
          <Link>Shop</Link>
          <Link>FAQ</Link>
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
