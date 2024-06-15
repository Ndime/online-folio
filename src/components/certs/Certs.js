import React from "react";

import AWS1 from "../../assets/images/cert-img/0.png";
import AWS2 from "../../assets/images/cert-img/1.png";
import AWS4 from "../../assets/images/cert-img/4.png";
import AWS5 from "../../assets/images/cert-img/5.png";

import "./Certs.css";

const Certs = () => {
  return (
    <div className="certificationWrapper">
      <img className="certImages" src={AWS5} alt={`azure fundamentals`} />
      <img className="certImages" src={AWS1} alt={`cloud practioner`} />
      <img className="certImages" src={AWS2} alt={`solutions archictect associate`} />
      <img className="certImages" src={AWS4} alt={`developer associate`} />
    </div>
  );
};

export default Certs;
