import React from "react";

import krosivok from "../../img/shoe.jpg";
import remove from "../../img/remove-item.svg";

import styles from "./CartItem.module.scss";

const CartItem = () => {
  return (
    <div className={styles.root}>
      <img className={styles.image} src={krosivok} />
      <div className={styles.info}>
        <h2 className={styles.title}>Мужские Кроссовки Nike Air Max 270</h2>
        <span className={styles.price}>12 999 руб.</span>
      </div>
      <btn className={styles.btn}>
        <img src={remove} />
      </btn>
    </div>
  );
};

export default CartItem;
