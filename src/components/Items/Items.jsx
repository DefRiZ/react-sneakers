import React from "react";
import Item from "../Item/Item";

import styles from "./Items.module.scss";

const Items = () => {
  return (
    <div className={styles.items}>
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default Items;
