import React from "react";

import styles from "./FirstSlide.module.scss";

import adidas from "../../img/abibas.png";
import banner from "../../img/banner.png";

const ThirdSlide = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.info}>
        <img className={styles.logo} src={adidas} />
        <h2 className={styles.title}>
          <span>Тестовий слайд</span> номер 3!
        </h2>
        <button className={styles.button}>Купить</button>
      </div>
      <div className={styles.image}>
        <img src={banner} />
      </div>
    </div>
  );
};

export default ThirdSlide;
