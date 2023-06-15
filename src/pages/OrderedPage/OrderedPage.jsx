import React from "react";

import back from "../../img/btn-back.png";
import sad from "../../img/smile-1.jpg";
import arrow from "../../img/btn-arrow.svg";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./OrderedPage.module.scss";
import Item from "../../components/Item/Item";

const OrderedPage = () => {
  const { orderedItem } = useSelector((state) => state.cart);
  if (!orderedItem) {
    return (
      <div className={styles.rootEmpty}>
        <img className={styles.image} src={sad} />
        <h2 className={styles.titleEmpty}>У вас нет заказов</h2>
        <p className={styles.text}>Вы нищеброд? Оформите хотя бы один заказ.</p>
        <div className={styles.btnBlock}>
          <Link className={styles.btn} to="/">
            <button>
              <img className={styles.arrow} src={arrow} />
              Вернуться назад
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
        <h1 className={styles.title}>Мои покупки</h1>
      </div>
      <div className={styles.items}>
        {orderedItem.map((obj) => (
          <Item key={obj.id} {...obj} favorited={true} />
        ))}
      </div>
    </div>
  );
};

export default OrderedPage;
