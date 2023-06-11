import React from "react";

import Banner from "../../components/Banner/Banner";

import Search from "../../components/Search/Search";
import Item from "../../components/Item/Item";

import styles from "./Main.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { fetchShoes } from "../../store/slices/shoeSlice";

import Skeleton from "../../components/Item/Skeleton";

const Main = () => {
  const dispatch = useDispatch();
  const { itemsFetch, status } = useSelector((state) => state.shoes);
  const { search } = useSelector((state) => state.filter);

  React.useEffect(() => {
    const searchValue = search ? `&search=${search}` : "";
    dispatch(fetchShoes({ searchValue }));
  }, [dispatch, search]);
  const shoesList = itemsFetch.map((obj) => <Item key={obj.id} {...obj} />);
  const skeletonList = [...new Array(4)].map((_, i) => <Skeleton key={i} />);
  return (
    <div>
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
