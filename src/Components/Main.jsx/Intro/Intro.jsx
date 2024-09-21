import React from "react";
import Navbar from "../../Navbar/Navbar";
import style from "./Intro.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../ThemeContext";
const Intro = () => {
  const { t } = useTranslation();
  const { darkMode } = useTheme();
  return (
    <div className={darkMode ? style.darkMode : style.lightMode}>
      <div>
        <img
          fetchpriority="high"
          decoding="async"
          width="1496"
          height="771"
          src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_bg3.png"
          id={style.bgphoto}
          alt=""
          srcset="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_bg3.png 1789w, https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_bg3-600x326.png 600w, https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_bg3-300x163.png 300w, https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_bg3-1024x556.png 1024w, https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_bg3-768x417.png 768w, https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_bg3-1536x834.png 1536w"
          sizes="(max-width: 1496px) 100vw, 1496px"
        ></img>
        <div className={style.overlay}>
          <Navbar />
        </div>
        <div  className={style.content}>
          <h2 data-aos="fade-down" data-aos-delay="200">LET'S</h2>
          <h1 data-aos="fade-down" data-aos-delay="200">PLAY GAMES</h1>
          <h3 data-aos="fade-up" data-aos-delay="200">We focus on creating beautiful games</h3>
        </div>
        <button  data-aos="fade-up" data-aos-delay="200" className={style.firstButton}>
          <Link to='/about'>OUR PROJECTS</Link>
        </button>
      </div>
      <div className={style.explore}>
        <div className={style.partOne}>
          <div>
            <img
              src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h1_deco.png"
              className={style.donen}
              alt="donen"
            />
          </div>
          <h3 data-aos="fade-down" data-aos-delay="200">
            Qamico Studio is a team of over 100 highly experienced professionals
            from all around the world who share the passion and drive for
            creating video games.
          </h3>
          <p data-aos="fade-down" data-aos-delay="200">
            The studios are integrated into the Group by service line and use
            the operating systems and tools deployed by those services lines to
            ensure people and projects can operate across studios and across
            geographies.
          </p>

          <Link data-aos="fade-down" data-aos-delay="200" to="/about">
            MORE ABOUT US <i class="fa-solid fa-arrow-right-long"></i>
          </Link>
          <div>
            <img
            data-aos="fade-down" data-aos-delay="200"
              className={style.img3}
              src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_img3.jpg"
              width="420"
              height="350"
              alt="img3"
            />
          </div>
        </div>
        <div className={style.partTwo}>
          <div className={style.headline}>
            <p data-aos="fade-down" data-aos-delay="200">EXPLORE</p>
            <h1 data-aos="fade-down" data-aos-delay="200">STUDIO</h1>
          </div>
          <img
            className={style.img4}
            src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_img2.jpg"
            width="700"
            height="540"
          />
          <img
          data-aos="zoom-in" data-aos-delay="200"
            className={style.img5}
            src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_img1.png"
          />
          <h3 data-aos="fade-up" data-aos-delay="200">COME WORK WITH US!</h3>
          <div className={style.photos} data-aos="fade-up" data-aos-delay="200">
            <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_ava1.png" />
            <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_ava2.png" />
            <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_ava3.png" />
            <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_ava4.png" />
            <Link to='/team'>TEAM</Link>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Intro;
