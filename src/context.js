import React, { createContext, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [product, setProduct] = useState([]);

  return (
    <ProductsContext.Provider
      value={{
        productData,
        setProductData,
        product,
        setProduct,
        filteredData,
        setFilteredData,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };