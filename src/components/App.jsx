import React from "react";
import "../styles/tailwind.css";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { WishList } from "../pages/WishList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "../context";

const App = () => {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wish" element={<WishList />} />
        </Routes>
      </ProductsProvider>
    </BrowserRouter>
  );
};

export { App };
