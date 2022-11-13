import React from "react";
import Header2 from "../../components/Header2";
import HeaderImage from "../../images/header.jpeg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <Header2 title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo hic
        recusandae quis! Soluta veritatis corrupti iure, provident esse labore
        magnam dolorem eligendi dolores expedita culpa cum eaque, laborum ea
        corporis.
      </Header2>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="">
              <MdEmail />
            </a>
            <a href="">
              <BsMessenger />
            </a>
            <a href="">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
