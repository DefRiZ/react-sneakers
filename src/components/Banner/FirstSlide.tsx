import React from "react";

import styles from "./FirstSlide.module.scss";

import adidas from "../../img/abibas.png";
import banner from "../../img/banner.png";

const FirstSlide: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.info}>
        <img className={styles.logo} src={adidas} />
        <h2 className={styles.title}>
          <span>Stan Smith</span>, Forever!
        </h2>
        <button className={styles.button}>Купити</button>
      </div>
      <div className={styles.image}>
        <img src={banner} />
      </div>
    </div>
  );
};

export default FirstSlide;
