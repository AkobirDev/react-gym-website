import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import Header2 from "../../components/Header2";
import { trainers } from "../../data";
import HeaderImage from "../../images/header.jpeg";
import Trainer from "../../components/Trainer";
import "./trainers.css";
const Trainers = () => {
  return (
    <>
      <Header2 title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda error
        exercitationem libero a repellendus, omnis optio quam autem placeat
        molestias ratione facere accusantium quae corporis? Cum ea commodi at
        harum.
      </Header2>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                job={job}
                name={name}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedin />, link: socials[3] },
                ]}
              ></Trainer>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
