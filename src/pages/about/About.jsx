import React from "react";
import Header2 from "../../components/Header2";
import HeaderImage from "../../images/header.jpeg";
import Image from "../../images/about.webp";
import "./about.css";

const About = () => {
  return (
    <>
      <Header2 title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
        distinctio odio alias tempore, vero tenetur officia blanditiis officiis
        quas dicta.
      </Header2>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={Image} alt="" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              veniam laudantium officiis, temporibus facere ex quo in doloremque
              sapiente. Totam commodi laboriosam ipsam hic ut consequuntur,
              consectetur iure amet libero provident saepe quo harum, nisi
              cupiditate, placeat sed incidunt ex. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ad, cumque?
            </p>
            <p>
              consectetur iure amet libero provident saepe quo harum, nisi
              cupiditate, placeat sed incidunt ex. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ad, cumque?
            </p>
            <p>
              cupiditate, placeat sed incidunt ex. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ad, cumque?
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              veniam laudantium officiis, temporibus facere ex quo in doloremque
              sapiente. Totam commodi laboriosam ipsam hic ut consequuntur,
              consectetur iure amet libero provident saepe quo harum, nisi
              cupiditate, placeat sed incidunt ex. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ad, cumque? consectetur iure amet
              libero provident saepe quo harum, nisi cupiditate, placeat sed
              incidunt ex. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Ad, cumque?
            </p>
          </div>
          <div className="about__section-image">
            <img src={Image} alt="" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={Image} alt="" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              veniam laudantium officiis, temporibus facere ex quo in doloremque
              sapiente. Totam commodi laboriosam ipsam hic ut consequuntur,
              consectetur iure amet libero provident saepe quo harum, nisi
              cupiditate, placeat sed incidunt ex. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ad, cumque?
            </p>
            <p>
              consectetur iure amet libero provident saepe quo harum, nisi
              cupiditate, placeat sed incidunt ex. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ad, cumque? cupiditate, placeat sed
              incidunt ex. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Ad, cumque?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
