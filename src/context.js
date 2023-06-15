import React, { createContext, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);

  return (
    <ProductsContext.Provider value={{ productData, setProductData }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
