import React, { useState } from "react";
import "./Card.css";
import { first, Second, thrid } from "../../assets/index";
const Card = () => {
  const [active1, setActive1] = useState("");
  const [active2, setActive2] = useState("");
  const [active3, setActive3] = useState("");
  const clickHandler1 = () => {
    active1 === "active" ? setActive1(" ") : setActive1("active");
    setActive2("");
    setActive3("");
  };
  const clickHandler2 = () => {
    active2 === "active" ? setActive2(" ") : setActive2("active");
    setActive1("");
    setActive3("");
  };
  const clickHandler3 = () => {
    active3 === "active" ? setActive3(" ") : setActive3("active");
    setActive1("");
    setActive2("");
  };
  return (
    <section>
      <div className="container">
        <div className={`panel ${active1}`} onClick={clickHandler1}>
          <div className="card-contain">
            <h1>STRENGTH</h1>
          </div>
          <div className="card-image">
            <img src={first} alt="" />
          </div>
        </div>
        <div className={`panel ${active2}`} onClick={clickHandler2}>
          <div className="card-contain">
            <h1>MOBILITY</h1>
          </div>
          <div className="card-image">
            <img src={Second} alt="" />
          </div>
        </div>
        <div className={`panel ${active3}`} onClick={clickHandler3}>
          <div className="card-contain">
            <h1>DRILLS</h1>
          </div>
          <div className="card-image">
            <img src={thrid} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
