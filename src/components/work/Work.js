import React from "react";

import folioLists from "../../data/folio";

import styles from "./Work.module.css";

const Work = () => {
  const clickhandle = (arg) => {
    console.log(arg.name + " has been clicked");
    window.open(arg.link, "_blank");
  };
  return (
    <>
      <h1
        style={{
          margin: 0,
          textAlign: "center",
          padding: "1rem",
          paddingTop: "8rem",
          paddingBottom: "4rem",
          textDecoration: "underline",
          fontSize: "3rem",
        }}>
        My Work
      </h1>
      <div className={styles.section_wrapper}>
        {folioLists.map((curr, index) => {
          return (
            <div key={index} className={styles.folio_card} onClick={() => clickhandle(curr)}>
              <img src={curr.thumbnail} alt={curr.name} />
              <div className={styles.folio_title_descr}>
                <h3>{curr.name}</h3>
                <span>{curr.type}</span>
                <p>{curr.descr}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Work;
