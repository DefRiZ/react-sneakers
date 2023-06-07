import React from "react";

import styles from "./Item.module.scss";

import add from "../../img/btn-plus.svg";
import added from "../../img/btn-checked.svg";
import disable from "../../img/heart-unliked.svg";

import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/slices/cartSlice";

const Item = ({ id, title, price, imageUrl }) => {
  const dispatch = useDispatch();
  // const { items } = useSelector((state) => state.cart);
  // const [isAdded, setIsAdded] = React.useState(false);

  const addButton = () => {
    const item = {
      id,
      imageUrl,
      price,
      title,
    };
    dispatch(addItem(item));
    // setIsAdded(true);
  };

  return (
    <div className={styles.item}>
      <div className={styles.favorite}>
        <img src={disable} />
      </div>
      <img className={styles.shoes} src={imageUrl} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.purchase}>
        <div className={styles.info}>
          <span>Цена:</span>
          <span>{price} руб.</span>
        </div>
        <button className={styles.button}>
          <img
            onClick={() => addButton()}
            // src={isAdded === false ? add : added}
            src={add}
          />
        </button>
      </div>
    </div>
  );
};

export default Item;
