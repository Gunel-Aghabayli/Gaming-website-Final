import React from "react";
import style from "./Reward.module.css";
const Reward = () => {
  return (
    <div className={style.general}>
      <div className={style.awards}>
        <div className={style.award1}>
          <h1 data-aos="fade-down" data-aos-delay="200">OUR</h1>
          <h2 data-aos="fade-down" data-aos-delay="200">AWARDS</h2>
        </div>
        <img data-aos="fade-up" data-aos-delay="200"className={style.image} src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_img8.png" />
      </div>
      <div className={style.wreaths}>
        <div className={style.wreath1}>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/256/12716/12716097.png"
              width="300px"
            />
            <h2 className={style.h1}>Independent Games Festival</h2>
            <p className={style.p1}>Finalist</p>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/256/12716/12716097.png"
              width="300px"
            />
            <h2 className={style.h2}>Game Industry News</h2>
            <p className={style.p2}>Gem 2019</p>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/256/12716/12716097.png"
              width="300px"
            />
            <h2  className={style.h3}>Gameplay Design Award</h2>
            <p  className={style.p3}>Winner</p>
          </div>
          <div>
          <img
            src="https://cdn-icons-png.flaticon.com/256/12716/12716097.png"
            width="300px"
          />
          <h2  className={style.h4}>Games For Change</h2>
          <p  className={style.p4}>Best Game</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
