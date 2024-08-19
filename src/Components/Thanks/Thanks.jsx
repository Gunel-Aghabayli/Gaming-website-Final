import React from "react";
import style from "./Thanks.module.css";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div>
    <div className={style.bgabout}>
    <div className={style.content}>
       <h1>THANK YOU!</h1>
       <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h1_img-5.png" />
      
       <h3>GREAT! We have done all the operations!</h3>
       <button className={style.firstButton}>
         <Link to="/">BACK TO HOMEPAGE</Link>
       </button>
     </div>
   </div>
    </div>
  );
};

export default Thanks;
