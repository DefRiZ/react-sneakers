import React from "react";

import Banner from "../../components/Banner/Banner";

import Search from "../../components/Search/Search";
import Item from "../../components/Item/Item";

import styles from "./Main.module.scss";

import { useSelector } from "react-redux";
import { fetchShoes } from "../../store/slices/shoeSlice";

import Skeleton from "../../components/Item/Skeleton";
import { RootState, useAppDispatch } from "../../store/store";
import { CartItem } from "../../store/slices/cartSlice";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const { itemsFetch, status } = useSelector((state: RootState) => state.shoes);
  const { search } = useSelector((state: RootState) => state.filter);

  React.useEffect(() => {
    const searchValue = search ? `&search=${search}` : "";
    dispatch(fetchShoes({ searchValue }));
  }, [dispatch, search]);

  const shoesList = itemsFetch.map((obj: CartItem) => (
    <Item key={obj.id} {...obj} />
  ));
  const skeletonList = [...new Array(4)].map((_, i) => <Skeleton key={i} />);
  return (
    <div>
      <Banner />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h2>Усі кросівки</h2>
          <Search />
        </div>
        <div className={styles.items}>
          {status === "error" && <p>Спробуйте оновити сторінку!</p>}
          {status === "loading" ? skeletonList : shoesList}
        </div>
      </div>
    </div>
  );
};

export default Main;
