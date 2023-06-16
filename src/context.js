import React, { createContext, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

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
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
