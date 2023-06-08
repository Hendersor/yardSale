import React from "react";
import "../styles/tailwind.css";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { WishList } from "../pages/WishList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wish" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
