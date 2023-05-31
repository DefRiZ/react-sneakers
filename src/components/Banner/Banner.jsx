import React from "react";

import styles from "./Banner.module.scss";

import adidas from "../../img/abibas.png";
import banner from "../../img/banner.png";
import cursor from "../../img/cursor.svg";

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <div className={styles.info}>
          <img className={styles.logo} src={adidas} />
          <h2 className={styles.title}>
            <span>Stan Smith</span>, Forever!
          </h2>
          <button className={styles.button}>Купить</button>
        </div>
        <div className={styles.image}>
          <img src={banner} />
          <button className={styles.cursor}>
            <img src={cursor} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
