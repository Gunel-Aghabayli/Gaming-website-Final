import React from "react";
import style from "./Notfound.module.css";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <div className={style.bgabout}>
       <div className={style.content}>
          <h1>404</h1>
          <img src="https://demo2.wpopal.com/gamico/wp-content/themes/gamico/assets/images/404-img.png" />
          <h2>PAGE NOT FOUND</h2>
          <h3>We're not being able to find the page you're looking for</h3>
          <button className={style.firstButton}>
            <Link to="/">BACK TO HOMEPAGE</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
