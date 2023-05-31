import React from "react";

import styles from "./Drawer.module.scss";
import CartItem from "../CartItem/CartItem";

import arrow from "../../img/btn-arrow.svg";
import remove from "../../img/remove-item.svg";

const Drawer = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className={styles.title}>
          Корзина <img src={remove} className={styles.btnRemove} />
        </h2>
        <div className={styles.items}>
          <CartItem />
        </div>
        <div className={styles.order}>
          <ul>
            <li className={styles.price}>
              <span>Итого: </span>
              <div className={styles.dashed}></div>
              <span>21 498 руб. </span>
            </li>
            <li className={styles.price}>
              <span>Налог 5%: </span>
              <div className={styles.dashed}></div>
              <span>1074 руб. </span>
            </li>
          </ul>
          <button className={styles.btn}>
            Оформить заказ <img className={styles.arrow} src={arrow} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
