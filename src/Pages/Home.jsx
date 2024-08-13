import React from "react";
import Intro from "../Components/Main.jsx/Intro/Intro";
import Navbar from "../Components/Navbar/Navbar";
import Info from "../Components/Main.jsx/Info/Info";
import Reward from "../Components/Main.jsx/Rewards/Reward";
import Testimonials from "../Components/Testimonials/Testimonials";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Info />
      <Reward />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
