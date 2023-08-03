import React from "react";

import styles from "./Drawer.module.scss";
import CartItem from "../CartItem/CartItem";

import arrow from "../../img/btn-arrow.svg";
import remove from "../../img/remove-item.svg";
import apply from "../../img/apply.jpg";

import { useSelector } from "react-redux";
import {
  changeDrawer,
  addToOrdered,
  removeAll,
} from "../../store/slices/cartSlice";
import { RootState, useAppDispatch } from "../../store/store";

const Drawer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, totalPrice, tax, countOfOrder } = useSelector(
    (state: RootState) => state.cart
  );
  const [isOrdered, setIsOrdered] = React.useState(false);
  const onClickOrder = () => {
    dispatch(addToOrdered());
    setIsOrdered(true);
    // dispatch(removeAll());
  };
  const GoBackToMain = () => {
    dispatch(removeAll());
    dispatch(changeDrawer());
  };
  if (!isOrdered) {
    return (
      <div className={styles.overlay}>
        <div className={styles.drawer}>
          <h2 className={styles.title}>
            Корзина
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
                <span>Всього: </span>
                <div className={styles.dashed}></div>
                <span>{totalPrice + tax} грн. </span>
              </li>
              <li className={styles.price}>
                <span>Налог 5%: </span>
                <div className={styles.dashed}></div>
                <span>{tax} грн. </span>
              </li>
            </ul>
            <button onClick={() => onClickOrder()} className={styles.btn}>
              Оформити замовлення <img className={styles.arrow} src={arrow} />
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (isOrdered) {
    return (
      <div className={styles.overlay}>
        <div className={styles.drawer}>
          <h2 className={styles.title}>
            Корзина
            <img
              onClick={() => dispatch(changeDrawer())}
              src={remove}
              className={styles.btnRemove}
            />
          </h2>
          <div className={styles.root}>
            <img src={apply} />
            <h3 className={styles.subtitle}>Замовлення оформлене!</h3>
            <p className={styles.text}>
              Ваш заказ #{countOfOrder} скоро буде переданий доставці
            </p>
            <div className={styles.btnBlock}>
              <button className={styles.btn} onClick={() => GoBackToMain()}>
                <img className={styles.arrow} src={arrow} />
                Повернутися назад
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Drawer;
