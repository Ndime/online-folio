import React from "react";

import AWS1 from "../../assets/images/cert-img/0.png";
import AWS2 from "../../assets/images/cert-img/1.png";
import AWS3 from "../../assets/images/cert-img/2.png";
import CIW from "../../assets/images/cert-img/3.png";

import "./Certs.css";

const Certs = () => {
  return (
    <div className="certificationWrapper">
      <img className="certImages" src={AWS1} alt={`cloud practioner`} />
      <img className="certImages" src={AWS2} alt={`cloud practioner`} />
      {/* <img className={styles.certImages} src={AWS3} alt={`cloud practioner`} />
      <img className={styles.certImages} src={CIW} alt={`cloud practioner`} /> */}
    </div>
  );
};

export default Certs;
