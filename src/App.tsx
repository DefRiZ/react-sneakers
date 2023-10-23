import "./App.css";

import Main from "./pages/Main/Main";
import Drawer from "./components/Drawer/Drawer";
import EmptyDrawer from "./components/EmptyDrawer/EmptyDrawer";
import Header from "./components/Header/Header";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import OrderedPage from "./pages/OrderedPage/OrderedPage";

import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { RootState } from "./store/store";

function App() {
  const { items } = useSelector((state: RootState) => state.cart);
  const { isOpen } = useSelector((state: RootState) => state.cart);

  return (
    <div className="App">
      <Header />
      {isOpen && (items.length ? <Drawer /> : <EmptyDrawer />)}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/orders" element={<OrderedPage />} />
      </Routes>
    </div>
  );
}

export default App;
