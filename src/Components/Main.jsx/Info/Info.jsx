import React from "react";
import style from "./Info.module.css";
import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../../../ThemeContext";
const Info = () => {
  const { darkMode } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className={darkMode ? style.darkMode : style.lightMode}>
      <div className={style.games}>
        <div className={style.first}>
          <img data-aos="fade-right" data-aos-delay="200" src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_img4.png" />
          <div>
            <h1 data-aos="fade-down" data-aos-delay="200">GAME DEVELOPMENT</h1>
            <p data-aos="fade-down" data-aos-delay="200">
              Our diverse team has years of game storytelling and design
              experience, ready to deliver your vision across multiple
              platforms, mobile or desktop.
            </p>
          </div>
        </div>
        <div className={style.second}>
          <div>
            <h1 data-aos="fade-down" data-aos-delay="200">GAME DESIGN</h1>
            <p data-aos="fade-down" data-aos-delay="200">
              Even the most captivating game ideas will eventually become dull
              if the challenges never change. Good level design is about
              providing players with new and interesting challenges as they
              progress through the game.
            </p>
          </div>
          <img data-aos="fade-left" data-aos-delay="200" src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_img5.png" />
        </div>
        <div className={style.third}>
          <img data-aos="fade-right" data-aos-delay="200" src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_img6.png" />
          <div>
            <h1 data-aos="fade-down" data-aos-delay="200">ART DIRECTION</h1>
            <p data-aos="fade-down" data-aos-delay="200">
              Whether you need environment art or character, creature and object
              designs ranging from whimsical themes to ultra-realistic visuals,
              our world-class artists are always ready to tackle your projects.
            </p>
          </div>
        </div>
      </div>
      <div className={style.counter}>
        <div className={style.countSection} ref={ref}>
          <div className={style.number}>
            <h2> {inView && <CountUp start={0} end={25} duration={2} />}</h2>
            <span>YEARS OF EXPERIENCE</span>
          </div>
          <div className={style.number}>
            <h2> {inView && <CountUp start={0} end={33} duration={2} />}</h2>
            <span>QUALIFIED STAFF</span>
          </div>
          <div className={style.number}>
            <h2> {inView && <CountUp start={0} end={12} duration={2} />}</h2>
            <span>GREAT LOCATIONS</span>
          </div>
          <div className={style.number}>
            <h2> {inView && <CountUp start={0} end={19} duration={2} />}</h2>
            <span>COMPLETED GAMES</span>
          </div>
          <div className={style.video}>
            <a href="https://youtu.be/2kJ9hIagoyk">
              <span>Click for video </span>
              <i class="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
        <hr className={style.line}></hr>
        <div className={style.name}>
        <p data-aos="fade-down" data-aos-delay="200">“WE MAKE THE GAMES WE'D LOVE TO PLAY”</p>
        <h3 data-aos="fade-down" data-aos-delay="200">ALEX GRANT, <span>FOUNDER</span></h3>
      </div>
        </div>
    </div>
  );
};

export default Info;
