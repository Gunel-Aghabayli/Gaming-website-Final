import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../ThemeContext";
import { useTranslation } from "react-i18next"; // Import the translation hook
import { Avatar, Dropdown, Menu } from "antd";
import { useAuth } from "../../AuthContext";
import { useAppContext } from "../../AppContext";
import style from "./Navbar.module.css";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoggedIn, logOut } = useAuth();
  const { cart, wishlist } = useAppContext();
  const { t, i18n } = useTranslation(); // Destructure the translation function
  const [language, setLanguage] = useState("ENG");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang, abbreviation) => {
    i18n.changeLanguage(lang);
    setLanguage(abbreviation);
  };

  const languageMenu = (
    <Menu className={style.lang}>
      <Menu.Item key="en" onClick={() => changeLanguage("en", "ENG")}>
        English
      </Menu.Item>
      <Menu.Item key="aze" onClick={() => changeLanguage("aze", "AZE")}>
        Azerbaijani
      </Menu.Item>
    </Menu>
  );

  const menu = (
    <Menu className={style.menu2}>
      {user?.email === "admin@gmail.com" ? (
        <div>
          <Menu.Item key="admin">
            <NavLink to="/admin">{t('admin_page')}</NavLink> {/* Translated */}
          </Menu.Item>
        </div>
      ) : user ? (
        <div>
          {user && (
            <div>
              <Menu.Item key="welcome">
                <span>Welcome, {user.email.split("agab")[0].toUpperCase()}</span>
              </Menu.Item>
              <Menu.Item key="email">
                <span>{user.email}</span>
              </Menu.Item>
            </div>
          )}
        </div>
      ) : null}
      <Menu.Item key="logout" onClick={logOut}>
        {t('log_out')} {/* Translated */}
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
            <NavLink to="/">{t('home')}</NavLink> {/* Translated */}
          </li>
          <li>
            <NavLink to="/about">{t('about')}</NavLink> {/* Translated */}
          </li>
          <li>
            <NavLink to="/shop">{t('shop')}</NavLink> {/* Translated */}
          </li>
          <li>
            <NavLink to="/faq">{t('faq')}</NavLink> {/* Translated */}
          </li>
          <li>
            <NavLink to="/contact">{t('contact')}</NavLink> {/* Translated */}
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
            <Dropdown overlay={menu} trigger={["click"]}>
              <Avatar
                style={{ backgroundColor: "#00a2ae", cursor: "pointer" }}
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
          <Dropdown overlay={languageMenu} trigger={["click"]}>
            <span
              className={style.languageToggle}
              style={{ cursor: "pointer" }}
            >
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
