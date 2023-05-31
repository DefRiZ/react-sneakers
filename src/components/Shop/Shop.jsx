import React from "react";

import styles from "./Shop.module.scss";
import Search from "../Search/Search";

import Items from "../Items/Items";

const Shop = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h2>Все кроссовки</h2>
        <Search />
      </div>
      <Items />
    </div>
  );
};

export default Shop;
