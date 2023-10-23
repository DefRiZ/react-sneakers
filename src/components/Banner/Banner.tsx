import React from "react";

import styles from "./Banner.module.scss";

import cursor from "../../img/cursor.svg";

import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";

import { useSelector } from "react-redux";
import { setCurrentSlide } from "../../store/slices/bannerSlice";
import { RootState, useAppDispatch } from "../../store/store";

const slides = [FirstSlide, SecondSlide, ThirdSlide];

const Banner: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentSlide } = useSelector((state: RootState) => state.banner);
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
        <img src={cursor} alt="change-button" />
      </button>
    </div>
  );
};

export default Banner;
