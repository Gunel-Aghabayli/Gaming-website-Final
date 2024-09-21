import React from "react";
import style from "./Wish.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../AppContext";
import Navbar from "../Navbar/Navbar";
import { toast } from "react-toastify";
import { useTheme } from "../../ThemeContext";
const Wish = () => {
  const { darkMode } = useTheme();
  const { wishlist, cart, addToCart, removeFromWishlist } = useAppContext();
  const navigate = useNavigate();
  const isProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const handleAddToCart = (product) => {
    if (!isProductInCart(product)) {
      addToCart(product);
      toast.success("Added successfully to Cart");
    }
  };
  return (
    <div className={darkMode ? style.darkMode : style.lightMode}>
      <div>
        <div className={style.bgabout}>
          <Navbar />
          <div className={style.content}>
            <h1>
              YOUR <span>WISHLIST</span>
            </h1>
          </div>
        </div>
        {wishlist.length > 0 ? (
          wishlist.map((product, index) => (
            <div key={index} className={style.wishlist}>
              <img src={product.image} />
              <Link to={`/shops/products?product=${product.id}`}>
              {product.title}
            </Link>
              <h3>${product.price}</h3>
              <button
                className={style.btn2}
                onClick={() => removeFromWishlist(product)}
              >
                Remove
              </button>
              <button
                className={style.btn2}
                onClick={() => handleAddToCart(product)}
                disabled={isProductInCart(product)}
              >
                {isProductInCart(product) ? "Already Added" : "Add to Cart"}
              </button>
              <button className={style.btn2} onClick={() => navigate("/shop")}>
                Back to Shop
              </button>
            </div>
          ))
        ) : (
          <div className={style.emptyList}>
          <img src="https://michaelcojeweler.com/assets/images/empty-wishlist.png" width='300px' height='200px'/>
          <p className={style.noItem}>OOPS..!Your wishlist is currently empty</p>
          <Link to='/shop'>RETURN TO SHOP</Link>
          </div>
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

export default Wish;
