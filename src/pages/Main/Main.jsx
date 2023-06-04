import React from "react";

import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Drawer from "../../components/Drawer/Drawer";
import Search from "../../components/Search/Search";
import Item from "../../components/Item/Item";

import styles from "./Main.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { fetchShoes } from "../../store/slices/shoeSlice";

import Skeleton from "../../components/Item/Skeleton";

const Main = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.shoes);
  const { isOpen } = useSelector((state) => state.cart);

  React.useEffect(() => {
    dispatch(fetchShoes());
  }, [dispatch]);
  const shoesList = items.map((obj) => <Item key={obj.id} {...obj} />);
  const skeletonList = [...new Array(4)].map((_, i) => <Skeleton key={i} />);
  return (
    <div>
      <Header />
      {isOpen && <Drawer />}
      <Banner />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h2>Все кроссовки</h2>
          <Search />
        </div>
        <div className={styles.items}>
          {status === "error" && <p>Попробуйте обновить страницу!</p>}
          {status === "loading" ? skeletonList : shoesList}
        </div>
      </div>
    </div>
  );
};

export default Main;
