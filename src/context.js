import React, { createContext, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  const [total, setTotal] = useState(0);
  const [newWishNot, setNewWishNot] = useState(false);
  const [newProductNot, setNewProductNot] = useState(false);

  return (
    <ProductsContext.Provider
      value={{
        productData,
        setProductData,
        product,
        setProduct,
        filteredData,
        setFilteredData,
        cart,
        setCart,
        wish,
        setWish,
        total,
        setTotal,
        newWishNot,
        setNewWishNot,
        newProductNot,
        setNewProductNot,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
