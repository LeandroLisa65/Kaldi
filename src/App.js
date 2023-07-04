import React, { useState } from "react";
import { BrowserRouter , Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import Categories from "./pages/Categories/Categories";

import CartContext from "./contexts/cartContext";

function App() {
  const [cart, setCart] = useState([]);
  const [qnt, setQnt] = useState(0);

  return (
    <div>
      <CartContext.Provider value={{ cart, setCart, qnt, setQnt }}>
        <BrowserRouter>
          <CssBaseline>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/item/:id" element={<ItemDetailPage/>}/>
              <Route path="/categories/:id" element={<Categories />}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/*" element={<Navigate to="/" replace={true}/>}/>
            </Routes>
          </CssBaseline>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
