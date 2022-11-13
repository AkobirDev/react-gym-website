import React from "react";
import "./gallery.css";
import Header2 from "../../components/Header2";
import HeaderImage from "../../images/header.jpeg";
const Gallery = () => {
  const galleryLen = 15;
  const images = [];
  for (let i = 1; i <= galleryLen; i++) {
    images.push(require(`../../images/gallery.webp`));
  }
  return (
    <>
      <Header2 title="Our Gallery" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae mollitia
        incidunt aliquam vero nemo obcaecati magni. Esse eum laudantium
        reprehenderit nam magnam totam deserunt, et debitis, amet asperiores
        dignissimos magni.
      </Header2>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt="" />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
