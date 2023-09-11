import React, { createContext, useState } from "react";
import { useLocalStorage } from "./localStorage";
const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const [orders, setOrders] = useState([]);
  const [newWishNot, setNewWishNot] = useState(false);
  const [newProductNot, setNewProductNot] = useState(false);
  const [cartElements, saveCartProduct] = useLocalStorage("CART_V1", []);
  const [wishElements, saveWishProduct] = useLocalStorage("WISH_V1", []);
  const [ordersElements, saveOrders] = useLocalStorage("ORDERS_V1", []);

  return (
    <ProductsContext.Provider
      value={{
        productData,
        setProductData,
        product,
        setProduct,
        filteredData,
        setFilteredData,
        total,
        setTotal,
        newWishNot,
        setNewWishNot,
        newProductNot,
        setNewProductNot,
        cartElements,
        saveCartProduct,
        wishElements,
        saveWishProduct,
        orders,
        setOrders,
        ordersElements,
        saveOrders,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
