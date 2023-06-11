import React from "react";

import back from "../../img/btn-back.png";
import sad from "../../img/smile-1.jpg";
import arrow from "../../img/btn-arrow.svg";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./FavoritePage.module.scss";
import Item from "../../components/Item/Item";

const FavoritePage = () => {
  const { favoriteItems } = useSelector((state) => state.cart);
  if (!favoriteItems.length) {
    return (
      <div className={styles.rootEmpty}>
        <img className={styles.image} src={sad} />
        <h2 className={styles.titleEmpty}>Закладок нет :(</h2>
        <p className={styles.text}>Вы ничего не добавляли в закладки</p>
        <div className={styles.btnBlock}>
          <Link className={styles.btn} to="/">
            <button>
              <img className={styles.arrow} src={arrow} />
              Оформить заказ
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.root}>
      <div className={styles.flexWrap}>
        <Link className={styles.button} to="/">
          <img src={back} />
        </Link>
        <h1 className={styles.title}>Мои закладки</h1>
      </div>
      <div className={styles.items}>
        {favoriteItems.map((obj) => (
          <Item key={obj.id} {...obj} favorited={true} />
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
