import React from "react";

import styles from "./Item.module.scss";

import add from "../../img/btn-plus.svg";
import disable from "../../img/heart-unliked.svg";
import able from "../../img/heart-liked.svg";

import { useDispatch, useSelector } from "react-redux";
import {
  CartItemProps,
  addItem,
  addToFavorite,
  removeFromFavorite,
} from "../../store/slices/cartSlice";
import { RootState } from "../../store/store";

const Item: React.FC<CartItemProps> = ({
  id,
  title,
  price,
  imageUrl,
  favorited = false,
}) => {
  const dispatch = useDispatch();
  const { favoriteItems } = useSelector((state: RootState) => state.cart);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const addButton = () => {
    const item = {
      id,
      imageUrl,
      price,
      title,
      favorited,
    };
    dispatch(addItem(item));
  };

  const addToFavoriteButton = () => {
    const item = {
      id,
      imageUrl,
      price,
      title,
      favorited,
    };
    if (favoriteItems.find((obj) => obj.id === item.id)) {
      dispatch(removeFromFavorite(item));
      setIsFavorite(false);
    } else {
      dispatch(addToFavorite(item));
      setIsFavorite(true);
    }
  };

  return (
    <div className={styles.item}>
      <div className={styles.favorite}>
        <img
          src={isFavorite ? able : disable}
          alt="favorite-label"
          onClick={() => addToFavoriteButton()}
        />
      </div>
      <img className={styles.shoes} src={imageUrl} alt="item" />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.purchase}>
        <div className={styles.info}>
          <span>Ціна:</span>
          <span>{price} грн.</span>
        </div>
        <button className={styles.button}>
          <img onClick={() => addButton()} src={add} alt="add-button" />
        </button>
      </div>
    </div>
  );
};

export default Item;
