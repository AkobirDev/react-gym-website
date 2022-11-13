import React from "react";
import Header2 from "../../components/Header2";
import { plans } from "../../data";
import Card from "../../UI/Card";
import HeaderImage from "../../images/header.jpeg";
import "./plans.css";
const Plans = () => {
  return (
    <>
      <Header2 title="Membership Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odit,
        error nemo nihil odio fuga repellat aperiam architecto nam possimus,
        perferendis ut, sequi obcaecati? Fugiat quaerat deserunt impedit
        aspernatur libero?
      </Header2>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, desc, name, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/month</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, i) => {
                  return (
                    <p key={i} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
