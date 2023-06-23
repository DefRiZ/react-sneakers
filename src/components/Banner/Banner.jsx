import React from "react";

import cursor from "../../img/cursor.svg";

import { useSelector, useDispatch } from "react-redux";
import { setCurrentSlide } from "../../store/slices/bannerSlice";

import styles from "./Banner.module.scss";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";

const slides = [FirstSlide, SecondSlide, ThirdSlide];

const Banner = () => {
  const dispatch = useDispatch();
  const { currentSlide } = useSelector((state) => state.banner);
  const changeSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    dispatch(setCurrentSlide(newIndex));
  };
  return (
    <div className={styles.wrapper}>
      {currentSlide === 0 && <FirstSlide />}
      {currentSlide === 1 && <SecondSlide />}
      {currentSlide === 2 && <ThirdSlide />}
      <button onClick={() => changeSlide()} className={styles.cursor}>
        <img src={cursor} />
      </button>
    </div>
  );
};

export default Banner;
