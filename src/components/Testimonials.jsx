import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/Card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../data";
import SectionHead from "./SectionHead";
import { useState } from "react";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, job, quote, avatar } = testimonials[index];
  function prevTestimonialHandle() {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  }
  function nextTestimonialHandle() {
    setIndex((prev) => prev + 1);
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  }
  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonials__head"
        />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <button className="testimonials__btn-container">
          <button className="testimonial__btn" onClick={prevTestimonialHandle}>
            <IoIosArrowDropleftCircle />
          </button>
          <button className="testimonial__btn" onClick={nextTestimonialHandle}>
            <IoIosArrowDroprightCircle />
          </button>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
