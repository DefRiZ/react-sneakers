import React from "react";

import styles from "./OrderedPage.module.scss";

import back from "../../img/btn-back.png";
import sad from "../../img/smile-1.jpg";
import arrow from "../../img/btn-arrow.svg";

import Item from "../../components/Item/Item";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const OrderedPage: React.FC = () => {
  const { orderedItem } = useSelector((state: RootState) => state.cart);
  if (!orderedItem) {
    return (
      <div className={styles.rootEmpty}>
        <img className={styles.image} src={sad} alt="smile" />
        <h2 className={styles.titleEmpty}>У вас немає замовлень</h2>
        <p className={styles.text}>Спочатку оформіть хоча б одне замовлення</p>
        <div className={styles.btnBlock}>
          <Link className={styles.btn} to="/">
            <button>
              <img className={styles.arrow} src={arrow} alt="back" />
              Повернутися назад
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
          <img src={back} alt="back" />
        </Link>
        <h1 className={styles.title}>Мої покупки</h1>
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
