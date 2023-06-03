import React from "react";

import styles from "./Item.module.scss";

import add from "../../img/btn-plus.svg";
import added from "../../img/btn-checked.svg";
import disable from "../../img/heart-unliked.svg";

const Item = ({ id, title, price, imageUrl }) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const onChangeButton = () => {
    console.log(isAdded);
    setIsAdded(!isAdded);
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
          <text>Цена:</text>
          <span>{price} руб.</span>
        </div>
        <button className={styles.button}>
          <img
            onClick={() => onChangeButton()}
            src={isAdded === false ? add : added}
          />
        </button>
      </div>
    </div>
  );
};

export default Item;
