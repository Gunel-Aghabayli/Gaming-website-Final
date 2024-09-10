import React from "react";
import Navbar from "../../Navbar/Navbar";
import style from "./Intro.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div>
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
        <div className={style.content}>
          <h2>LET'S</h2>
          <h1>PLAY GAMES</h1>
          <h3>We focus on creating beautiful games</h3>
        </div>
        <button className={style.firstButton}>
          <Link>OUR PROJECTS</Link>
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
          <h3>
            Qamico Studio is a team of over 100 highly experienced professionals
            from all around the world who share the passion and drive for
            creating video games.
          </h3>
          <p>
            The studios are integrated into the Group by service line and use
            the operating systems and tools deployed by those services lines to
            ensure people and projects can operate across studios and across
            geographies.
          </p>

          <Link to="">
            MORE ABOUT US <i class="fa-solid fa-arrow-right-long"></i>
          </Link>
          <div>
            <img
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
            <p>EXPLORE</p>
            <h1>STUDIO</h1>
          </div>

          <img
            className={style.img4}
            src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_img2.jpg"
            width="700"
            height="540"
          />
          <img
            className={style.img5}
            src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_img1.png"
          />
          <h3>COME WORK WITH US!</h3>
          <div className={style.photos}>
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
