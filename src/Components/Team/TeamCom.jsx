import React from "react";
import style from "./TeamCom.module.css";
import { useSelector, useDispatch } from "react-redux";
import { SET_TEAM_MEMBERS } from "../../reducers/action.js";
import { useEffect } from "react";
import { supabase } from "../../supabase.js";
import Navbar from "../Navbar/Navbar.jsx";
import { Link, useSearchParams } from "react-router-dom";

const TeamCom = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const team = useSelector((state) => state.team);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const { data, error } = await supabase.from("team").select("*");

        if (error) {
          throw error;
        }

        dispatch({ type: SET_TEAM_MEMBERS, payload: data });
      } catch (error) {
        console.error("Error fetching team data:", error.message);
      }
    };

    fetchTeamData();
  }, [dispatch]);

  return (
    <div>
      <div className={style.bgabout}>
        <Navbar />
        <div className={style.content}>
          <h1>
            DEFINITIVE <span>TEAM</span>
          </h1>
        </div>
      </div>

      <div className={style.allTeam}>
        {team.map((member) => (
          <div key={member.id}>
            <img src={member.image} width="400px" height="430px" />
            <div className={style.header}>
              <Link to={`/teammates?members=${member.id}`}>{member.name}</Link>
              <h3>{member.head}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className={style.container}>
        <div className={style.flexContainer}>
          <div className={style.qamico}>
            <a href="../../Pages/Home.jsx" className={style.brand}>
              <img
                src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/logo_light.svg"
                className={style.logo}
              />
            </a>
            <p>
              Qamico is an independent game studio making original games for PC,
              consoles, and mobile platforms.
            </p>
            <hr />
            <div className={style.location}>
              <i class="fa-regular fa-building"></i>
              <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
            </div>
          </div>
          <div className={style.footerLinks}>
            <h5>Our Studio</h5>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact us</Link>
          </div>
          <div className={style.footerLinks}>
            <h5>Services</h5>
            <Link to="/shop">Shop</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div className={style.footerContact}>
            <h5>Say Hello</h5>
            <p>hello@example.com</p>
            <p>+123 888 000 33</p>
          </div>
        </div>
        <div className={style.footerBottom}>
          <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/ft-img.png" />
          <span>© 2023 Qamico™. All Rights Reserved.</span>
          <div className={style.socialIcons}>
            <a href="#" className={style.icon}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className={style.icon}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className={style.icon}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className={style.icon}>
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCom;
