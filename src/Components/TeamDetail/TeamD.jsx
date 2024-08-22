import React, { useEffect, useState } from "react";
import style from "./TeamD.module.css";
import { Link, useSearchParams } from "react-router-dom";
import { supabase } from "../../supabase.js";
import Navbar from "../Navbar/Navbar.jsx";

const TeamD = () => {
  const [searchParams] = useSearchParams();
  const [member, setMember] = useState(null);
  const memberId = searchParams.get("members");

  useEffect(() => {
    const fetchMemberDetails = async () => {
      try {
        const { data, error } = await supabase
          .from("team")
          .select("*")
          .eq("id", memberId)
          .single();

        if (error) {
          throw error;
        }

        setMember(data);
      } catch (error) {
        console.error("Error fetching team member details:", error.message);
      }
    };

    fetchMemberDetails();
  }, [memberId]);

  if (!member) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={style.bgabout}>
        <Navbar />
        <div className={style.content}>
          <h1>
            JOB <span>DETAILS</span>
          </h1>
        </div>
      </div>
      <div className={style.memberDetails}>
        <img
          src={member.image}
          alt={member.name}
          width="400px"
          height="430px"
        />
        <div>
          <h1 className={style.name}>{member.name}</h1>
          <h3 className={style.head}>{member.head}</h3>
          <hr/>
          <p className={style.info}>{member.info}</p>
        </div>
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

export default TeamD;
