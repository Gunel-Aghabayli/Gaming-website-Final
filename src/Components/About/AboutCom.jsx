import React from "react";
import style from "./AboutCom.module.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useState } from "react";
import {  NavLink } from "react-router-dom";
import { useTheme } from "../../ThemeContext";
import { useTranslation } from "react-i18next";
import { Avatar, Dropdown, Menu } from 'antd';
import { useAuth } from "../../AuthContext";
import { useAppContext } from "../../AppContext"; 


const AboutCom = () => {
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
      <div className={style.bgabout}>
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

        <div className={style.content}>
          <h1>
            THE <span>STORIES</span>
          </h1>
        </div>
      </div>

      <div className={style.team}>
        <div>
          <img
            className={style.teamphoto}
            src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/about-pic.jpg"
          />
        </div>
        <div>
          <img
            className={style.donen}
            alt="donen"
            src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h1_deco.png"
          />
          <h2 className={style.studio}>
            WE ARE <span className={style.span}> AWARD-WINNING</span>{" "}
            INDEPENDENT GAME STUDIO, BASED IN THE UK.
          </h2>
          <p className={style.ptag}>
            The studios are integrated into the Group by service line and use
            the operating systems and tools deployed by those services lines to
            ensure people and projects can operate across studios and across
            geographies.
          </p>
        </div>
      </div>

      <div className={style.value}>
        <hr className={style.valuehr} />
        <h1 className={style.header}>OUR VALUES</h1>
        <div className={style.leaders}>
          <div>
            <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/ab-shape1.png" />
            <h2>PLAYER EXPERIENCE FIRST</h2>
            <p>
              We believe our laser focus on players inspires the most meaningful
              and lasting game experiences.
            </p>
          </div>
          <div>
            <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/ab-shape2.png" />
            <h2>DARE TO DREAM</h2>
            <p>
              We believe the courage to chase bold ideas will make impossible
              dreams come true for players.
            </p>
          </div>
          <div>
            <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/ab-shape3.png" />
            <h2>THRIVE TOGETHER</h2>
            <p>
              We believe we’re stronger when we respect each other, invest in
              each other, and succeed as one team.
            </p>
          </div>
          <div>
            <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/ab-shape4.png" />
            <h2>EXECUTE WITH EXCELLENCE</h2>
            <p>
              We believe operational excellence will unlock us to deliver better
              experiences for the long run.
            </p>
          </div>
        </div>
      </div>
      <div className={style.diversty}>
        <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/about-pic2.png" />
        <div className={style.inclusion}>
          <h1>Diversity & Inclusion</h1>
          <h2>
            We’re focused on making a great home for people who love making
            games and setting a high bar for diversity and inclusion.
          </h2>
          <h4>
            We believe that anyone with passion, vision, and perseverance can
            make a positive impact. As part of that ethos, we also believe that
            there are ways where we, as a company, can provide long-term value
            and positive impact to the players, partners, Rioters, and
            communities we serve.
          </h4>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutCom;
