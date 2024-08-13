import React, { useState } from "react";
import style from "./FAQcom.module.css";
import Navbar from "../Navbar/Navbar";
import Marquee from "react-marquee-slider";

export const FAQcom = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What should I do if I’m having technical difficulties?",
      answer:
        "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor ac enim. In hac habitasse platea dictumst. Sed cursus venenatis tellus, non lobortis diam volutpat sit amet.",
    },
    {
      question: "Can we start any time of year?",
      answer:
        "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor ac enim. In hac habitasse platea dictumst. Sed cursus venenatis tellus, non lobortis diam volutpat sit amet..",
    },
    {
      question: "Are you going to keep making games?",
      answer:
        "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor ac enim. In hac habitasse platea dictumst. Sed cursus venenatis tellus, non lobortis diam volutpat sit amet.",
    },
    {
      question: "How can I get in touch with you?",
      answer:
        "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor ac enim. In hac habitasse platea dictumst. Sed cursus venenatis tellus, non lobortis diam volutpat sit amet.",
    },
    {
      question: "In which countries can I find your company?",
      answer:
        "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor ac enim. In hac habitasse platea dictumst. Sed cursus venenatis tellus, non lobortis diam volutpat sit amet.",
    },
    {
      question: "In which countries can I find your company?",
      answer:
        "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor ac enim. In hac habitasse platea dictumst. Sed cursus venenatis tellus, non lobortis diam volutpat sit amet.",
    },
    {
      question: "Can I customize my games?",
      answer:
        "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet, augue eros luctus sapien, ut euismod leo tortor ac enim. In hac habitasse platea dictumst. Sed cursus venenatis tellus, non lobortis diam volutpat sit amet.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div className={style.bgabout}>
        <Navbar />
        <div className={style.content}>
          <h1>
            FREQUENTLY <span>QUESTIONS</span>
          </h1>
        </div>
      </div>
      <div className={style.contact}>
        <div className={style.help}>
          <h3>Hi, how can we help you?</h3>
          <h4>ASK QUESTIONS</h4>
          <div>
            <i class="fa-solid fa-phone"></i> <span>+123 888 000 33</span>
          </div>
          <div>
            <i class="fa-solid fa-envelope"></i>{" "}
            <span>contact@example.com</span>
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-photo/3d-rendering-boy-playing-online_23-2150898537.jpg?t=st=1722377580~exp=1722381180~hmac=ddf16b1dda0b9f17c8d72a60afed8b64a9194eab3c472d5e7a678a956aef9d38&w=740"
          alt="img"
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

      <div className={style.faqPhoto}>
        <div className={style.faq}>
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
          className={style.imag}
          src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/h3_img-11.png"
          alt="img"
        />
      </div>
    </div>
  );
};
