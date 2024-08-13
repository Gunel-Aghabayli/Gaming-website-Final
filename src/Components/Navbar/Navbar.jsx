import React from "react";
import { useState } from "react";
import style from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../ThemeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`${style.navbar} ${darkMode ? style.dark : ""}`}>
        <a href="">
          <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/logo-white.svg" />
        </a>
        <ul className={`${style.navbarLinks} ${isOpen ? style.active : ""}`}>
          <a href="">
            <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/logo.svg" />
          </a>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li onClick={toggleDarkMode} className={style.toggle}>
            {darkMode ? (
              <i className={`fa-solid fa-sun ${style.iconDark}`}></i>
            ) : (
              <i className={`fa-solid fa-moon ${style.iconLight}`}></i>
            )}
          </li>
        </ul>
        <div className={style.icons}>
          <NavLink to="/login">
            <i class="fa-regular fa-user"></i>
          </NavLink>
          <NavLink to="/wishlist">
            <i class="fa-regular fa-heart"></i>
          </NavLink>
          <NavLink to="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </NavLink>
        </div>
      </div>
      <div className={style.burger} onClick={toggleMenu}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
  );
};

export default Navbar;
