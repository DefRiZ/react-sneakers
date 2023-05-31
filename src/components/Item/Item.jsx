import React from "react";

import styles from "./Item.module.scss";

import shoes from "../../img/shoes.jpg";
import add from "../../img/btn-plus.svg";
import disable from "../../img/heart-unliked.svg";

const Item = () => {
  return (
    <div className={styles.item}>
      <div className={styles.favorite}>
        <img src={disable} />
      </div>
      <img className={styles.shoes} src={shoes} />
      <h3 className={styles.title}>
        Мужские Кроссовки <br /> Nike Blazer Mid Suede
      </h3>
      <div className={styles.purchase}>
        <div className={styles.info}>
          <text>Цена:</text>
          <span>12 999 руб.</span>
        </div>
        <button className={styles.button}>
          <img src={add} />
        </button>
      </div>
    </div>
  );
};

export default Item;
