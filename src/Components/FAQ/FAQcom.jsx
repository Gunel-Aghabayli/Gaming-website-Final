import React, { useState } from "react";
import style from "./FAQcom.module.css";
import Navbar from "../Navbar/Navbar";
import Marquee from "react-marquee-slider";
import { useTheme } from "../../ThemeContext";
export const FAQcom = () => {
  const { darkMode } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What should I do if I’m having technical difficulties?",
      answer:
        "If you’re experiencing technical difficulties, please contact our support team through our website or help center. We’re here to assist you with any issues you may encounter.",
    },
    {
      question: "Can we start any time of year?",
      answer:
        "Yes, you can start at any time of the year! There’s no specific time required to begin enjoying our products or services.",
    },
    {
      question: "Are you going to keep making games?",
      answer:
        "Absolutely! We’re dedicated to continuing the development of new games and bringing fresh, exciting content to our players.",
    },
    {
      question: "How can I get in touch with you?",
      answer:
        "You can reach out to us through our official website, email, or social media channels. We’re always open to hearing from our community and addressing any concerns or feedback.",
    },
    {
      question: "In which countries can I find your company?",
      answer:
        "Our company has a presence in multiple countries across the globe, including North America, Europe, and Asia. You can find our offices and operations in key regions worldwide.",
    },
    {
      question: "In which countries can I find your company?",
      answer:
        "We are a passionate team of developers, designers, and innovators dedicated to creating high-quality games that entertain and engage players around the world.",
    },
    {
      question: "Can I customize my games?",
      answer:
        "Customization options are available in many of our games. We strive to offer features that allow players to personalize their gaming experience to suit their preferences.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className={darkMode ? style.darkMode : style.lightMode}>
      <div className={style.bgabout}>
        <Navbar />
        <div className={style.content}>
          <h1 data-aos="fade-down" data-aos-delay="200">
            FREQUENTLY <span>QUESTIONS</span>
          </h1>
        </div>
      </div>
      <div className={style.contact}>
        <div className={style.help}>
          <h3 data-aos="fade-down" data-aos-delay="200">Hi, how can we help you?</h3>
          <h4 data-aos="fade-down" data-aos-delay="200">ASK QUESTIONS</h4>
          <div data-aos="fade-down" data-aos-delay="200">
            <i class="fa-solid fa-phone"></i> <span>+123 888 000 33</span>
          </div>
          <div data-aos="fade-down" data-aos-delay="200">
            <i class="fa-solid fa-envelope"></i>{" "}
            <span>contact@example.com</span>
          </div>
        </div>
        <img
          data-aos="fade-left" data-aos-delay="200"
          src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h1_img-3.png"
          alt="img"
          width='500px'
          height='700px'
        />
      </div>
      <div className={style.marq}>
        <Marquee>
          <p>Experiencing problems?</p>
          <p>Stuck on a level? </p>
          <p>Found a weird bug?</p>
          <p>Write us and we’ll do our best to figure out how to help you.</p>
        </Marquee>
      </div>
     <div className={style.ques} >
      <div className={style.faqPhoto}>
        <div className={style.faq} data-aos="fade-right" data-aos-delay="200">
          {faqs.map((faq, index) => (
            <div key={index} className={style.section}>
              <h3 onClick={() => toggleFAQ(index)}>
                {faq.question} <i class="fa-solid fa-chevron-down"></i>
              </h3>
              {openIndex === index && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
        <img
          data-aos="fade-left" data-aos-delay="200"
          className={style.imag}
          src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h3_img-11.png"
          alt="img"
        />
      </div>
      </div>
    </div>
  );
};
