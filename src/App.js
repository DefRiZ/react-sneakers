import React from "react";
import "./App.css";

import Main from "./pages/Main/Main";
import Drawer from "./components/Drawer/Drawer";
import EmptyDrawer from "./components/EmptyDrawer/EmptyDrawer";
import Header from "./components/Header/Header";

import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
function App() {
  const { items } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.cart);

  return (
    <div className="App">
      <Header />
      {isOpen && (items.length ? <Drawer /> : <EmptyDrawer />)}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </div>
  );
}

export default App;
