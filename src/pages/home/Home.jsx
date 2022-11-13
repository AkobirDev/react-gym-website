import React from "react";
import FAQs from "../../components/FAQs";

import Header from "../../components/Header";
import Programs from "../../components/Programs";
import Testimonials from "../../components/Testimonials";
import Values from "../../components/Values";
import "./home.css";
const Home = () => {
  return (
    <>
      <Header />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
