import React from "react";

import styles from "./Item.module.scss";

import add from "../../img/btn-plus.svg";
import added from "../../img/btn-checked.svg";
import disable from "../../img/heart-unliked.svg";
import able from "../../img/heart-liked.svg";

import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  addToFavorite,
  removeFromFavorite,
} from "../../store/slices/cartSlice";

const Item = ({ id, title, price, imageUrl, favorited = false }) => {
  const dispatch = useDispatch();
  const { favoriteItems } = useSelector((state) => state.cart);
  // const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  console.log(favoriteItems);

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

  const addToFavoriteButton = () => {
    const item = {
      id,
      imageUrl,
      price,
      title,
    };
    if (favoriteItems.find((obj) => obj.id === item.id)) {
      dispatch(removeFromFavorite(item));
      setIsFavorite(false);
      // setIsFavorite(false);
    } else {
      dispatch(addToFavorite(item));
      setIsFavorite(true);
      // setIsFavorite(true);
    }
  };
  // const deleteFavorite = ({ id }) => {
  //   dispatch(removeFromFavorite({ id }));
  //   setIsFavorite(false);
  // };

  return (
    <div className={styles.item}>
      <div className={styles.favorite}>
        <img
          src={isFavorite ? able : disable}
          onClick={() => addToFavoriteButton()}
        />
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
