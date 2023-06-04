import React from "react";

import styles from "./Drawer.module.scss";
import CartItem from "../CartItem/CartItem";

import arrow from "../../img/btn-arrow.svg";
import remove from "../../img/remove-item.svg";

import { useSelector, useDispatch } from "react-redux";
import { changeDrawer } from "../../store/slices/cartSlice";

const Drawer = () => {
  const dispatch = useDispatch();
  const { items, totalPrice, tax } = useSelector((state) => state.cart);
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className={styles.title}>
          Корзина{" "}
          <img
            onClick={() => dispatch(changeDrawer())}
            src={remove}
            className={styles.btnRemove}
          />
        </h2>
        <div className={styles.items}>
          {items.map((obj) => (
            <CartItem key={obj.id} {...obj} />
          ))}
        </div>
        <div className={styles.order}>
          <ul>
            <li className={styles.price}>
              <span>Итого: </span>
              <div className={styles.dashed}></div>
              <span>{totalPrice + tax} руб. </span>
            </li>
            <li className={styles.price}>
              <span>Налог 5%: </span>
              <div className={styles.dashed}></div>
              <span>{tax} руб. </span>
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
