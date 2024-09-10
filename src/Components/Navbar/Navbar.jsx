import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../ThemeContext";
import { useTranslation } from "react-i18next";
import { Avatar, Dropdown, Menu } from 'antd';
import { useAuth } from "../../AuthContext";
import { useAppContext } from "../../AppContext"; 
import style from "./Navbar.module.css";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoggedIn, logOut } = useAuth();
  const { cart, wishlist } = useAppContext(); 
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('ENG');
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const changeLanguage = (lang, abbreviation) => {
    i18n.changeLanguage(lang); 
    setLanguage(abbreviation); 
  };
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={logOut}>
        Log Out
      </Menu.Item>
    </Menu>
  );
  const languageMenu = (
    <Menu className={style.lang}>
      <Menu.Item key="en" onClick={() => changeLanguage('en', 'ENG')}>
        English
      </Menu.Item>
      <Menu.Item key="aze" onClick={() => changeLanguage('aze', 'AZE')}>
        Azerbaijani
      </Menu.Item>
    </Menu>
  );
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
          {isLoggedIn ? (
            <Dropdown overlay={menu} trigger={['click']}>
              <Avatar
                style={{ backgroundColor: '#00a2ae', cursor: 'pointer' }} 
                size="small"
              >
                {user.email.charAt(0).toUpperCase()} 
              </Avatar>
            </Dropdown>
          ) : (
            <NavLink to="/login">
              <i className="fa-regular fa-user"></i>
            </NavLink>
          )}
          <NavLink to="/wishlist" className={style.iconWrapper}>
            <i className="fa-regular fa-heart"></i>
            {wishlist.length > 0 && (
              <span className={style.badge}>{wishlist.length}</span>
            )}
          </NavLink>
          <NavLink to="/cart" className={style.iconWrapper}>
            <i className="fa-solid fa-cart-shopping"></i>
            {cart.length > 0 && (
              <span className={style.badge}>{cart.length}</span>
            )}
          </NavLink>
          <Dropdown overlay={languageMenu} trigger={['click']}>
         
          <span className={style.languageToggle} style={{ cursor: 'pointer' }}>
            {language}
          </span>
        </Dropdown>
        </div>
      </div>
      <div className={style.burger} onClick={toggleMenu}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
  );
};

export default Navbar;



