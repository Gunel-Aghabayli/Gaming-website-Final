import React from "react";
import style from "./Testionials.module.css";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Testimonials = () => {
  return (
    <div>
      <div className={style.reviews}>
        <h1>
          GAME <span>REVIEWS</span>
        </h1>
        <div className={style.allReviews}>
          <div className={style.review}>
            <h2>MASTERPIECE</h2>
            <hr />
            <p>
              “Animated space-exploration drama combines gorgeous animation with
              an exciting and emotional story”
            </p>
            <h6>ROBERT FOX, GAMER</h6>
          </div>
          <div className={style.review}>
            <h2>AMAZING</h2>
            <hr />
            <p>
              “Excellent job, your games is phenomenal. This is the way people
              will play in the future.”
            </p>
            <h6>JOHN DOE, PC GAMER</h6>
          </div>
          <div className={style.review}>
            <h2>GREAT</h2>
            <hr />
            <p>
              “Mesmerizing, serious gameplay. An exceptional work of the
              videogame scene!”
            </p>
            <h6>KEVIN JONES, GAME REVIEW</h6>
          </div>
        </div>
        <div className={style.heading}>
          <hr />
          <h3>RECENT CLIENTS</h3>
          <hr />
        </div>
        <Marquee>
          <div className={style.logos}>
            <img
              src="https://cdn-icons-png.flaticon.com/256/5969/5969151.png"
              width="120"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/256/13/13973.png"
              width="120"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/256/1/1321.png"
              width="100"
              height="100"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/256/588/588330.png"
              width="120"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/256/588/588338.png"
              width="100"
            />
          </div>
        </Marquee>

        
      
        </div>
    </div>
  );
};

export default Testimonials;
