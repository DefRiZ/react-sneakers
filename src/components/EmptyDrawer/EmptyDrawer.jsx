import React from "react";

import styles from "./EmptyDrawer.module.scss";

import remove from "../../img/btn-remove.svg";
import arrow from "../../img/btn-arrow.svg";
import empty from "../../img/empty.jpg";
import { useDispatch } from "react-redux";
import { changeDrawer } from "../../store/slices/cartSlice";

const EmptyDrawer = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className={styles.title}>
          Корзина{" "}
          <img
            src={remove}
            className={styles.btnRemove}
            onClick={() => dispatch(changeDrawer())}
          />
        </h2>
        <div className={styles.root}>
          <img src={empty} />
          <h3 className={styles.subtitle}>Корзина пуста</h3>
          <p className={styles.text}>
            Додайте хоча б одну пару взуття, щоб зробити замовлення!
          </p>
          <div className={styles.btnBlock}>
            <button
              className={styles.btn}
              onClick={() => dispatch(changeDrawer())}
            >
              <img className={styles.arrow} src={arrow} />
              Оформити замовлення
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyDrawer;
