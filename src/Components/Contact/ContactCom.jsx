import Navbar from "../Navbar/Navbar";
import React from "react";
import style from "./Contactcom.module.css";
import { useState } from "react";
import { useTheme } from "../../ThemeContext";
const ContactCom = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    thoughts: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("feedback", JSON.stringify(formData));
    alert("Your feedback was successfully sent");
    setFormData({
      name: "",
      phone: "",
      email: "",
      thoughts: "",
    });
  };
  return (
    <div className={darkMode ? style.darkMode : style.lightMode}>
      <div className={style.bgabout}>
        <Navbar />
        <div className={style.content}>
          <h1 data-aos="fade-down" data-aos-delay="200">
            CONTACT <span>US</span>
          </h1>
        </div>
      </div>
      <div className={style.contact}>
        <iframe
          className={style.map}
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24313.616373518413!2d49.85190465!3d40.3822144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1saz!2saz!4v1720913313271!5m2!1saz!2saz"
          width="80%"
          height="650"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div data-aos="fade-left" data-aos-delay="200" className={style.office}>
        <h1>OUR OFFICE</h1>
        <h4>175 Mittchell River Apt.616, US.</h4>
        <p>Office Headquarters</p>
        <h4>+123 66 000 888/ 66 000 999</h4>
        <p>Phone number</p>
        <h4>contact@example.com</h4>
        <p>Our email</p>
        <h4>Monday - Saturday</h4>
        <p>Working time</p>
      </div>
      <div data-aos="fade-down" data-aos-delay="200" className={style.form}>
        <hr />
        <p>FEEDBACK FORM</p>
        <form onSubmit={handleSubmit}>
          <div className={style.input}>
            <input
              type="text"
              placeholder="Name*" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.input}>
            <input
              type="number"
              id="phone"
              placeholder="Phone*"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.input}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={style.text}>
            <textarea
              id="thoughts"
              rows="20"
              cols="109"
              name="thoughts"
              value={formData.thoughts}
              placeholder="Say Something*"
              onChange={handleChange}
              required
            />
          </div>
          <button className={style.submit2} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className={style.support}> 
        <h2 data-aos="zoom-in" data-aos-delay="200">CONTACT SUPPORT</h2>
        <div data-aos="fade-up" data-aos-delay="200" className={style.imgs}>
          <div className={style.image1}>
            <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_ava1.png" />
            <h4>Carl Lee</h4>
            <h3 className={style.job}>Chief Officer</h3>
          </div>
          <div className={style.image1}>
            <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_ava2.png" />
            <h4>Luna Jones</h4>
            <h3 className={style.job}>Manager Support</h3>
          </div>
          <div className={style.image1}>
            <img src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h2_ava4.png" />
            <h4>Tonny Parker</h4>
            <h3 className={style.job}>Chief Officer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCom;
