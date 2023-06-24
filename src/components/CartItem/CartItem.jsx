import React from "react";

import remove from "../../img/remove-item.svg";

import styles from "./CartItem.module.scss";

import { useDispatch } from "react-redux";
import { removeItem } from "../../store/slices/cartSlice";

const CartItem = ({ id, title, price, imageUrl }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.root}>
      <img alt="shoes" className={styles.image} src={imageUrl} />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.price}>{price} грн.</span>
      </div>
      <btn className={styles.btn}>
        <img
          alt="delete"
          src={remove}
          onClick={() => dispatch(removeItem({ id }))}
        />
      </btn>
    </div>
  );
};

export default CartItem;
