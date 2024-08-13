import React from "react";
import style from "./AboutCom.module.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const AboutCom = () => {
  return (
    <div>
      <div className={style.bgabout}>
        <Navbar />
        <Link to="/home" className={style.link}>
          {" "}
          Go Back Home
        </Link>
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
      <Footer/>
    </div>
  );
};

export default AboutCom;
