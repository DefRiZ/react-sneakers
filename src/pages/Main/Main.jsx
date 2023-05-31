import React from "react";

import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Shop from "../../components/Shop/Shop";
import Drawer from "../../components/Drawer/Drawer";

const Main = () => {
  return (
    <div>
      <Header />
      <Drawer />
      <Banner />
      <Shop />
    </div>
  );
};

export default Main;
