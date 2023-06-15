import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../context";
import { fetchData } from "../apiConnection";
import { Product } from "./Product";

const Products = ({ setDescription, description }) => {
  const API = "https://fakestoreapi.com/products";
  const { productData, setProductData } = useContext(ProductsContext);
  const { filteredData } = useContext(ProductsContext);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchData(API);
      setProductData(products);
    };
    getProducts();
  }, []);

  return (
    <div className="w-full h-auto px-2 flex flex-wrap justify-evenly items-start gap-2 py-2">
      {filteredData.length === 0
        ? productData.map((p) => (
            <Product
              setDescription={setDescription}
              description={description}
              title={p.title}
              category={p.category}
              key={p.id}
              id={p.id}
              image={p.image}
              price={p.price}
              productDescription={p.description}
            />
          ))
        : filteredData.map((p) => (
            <Product
              setDescription={setDescription}
              description={description}
              title={p.title}
              category={p.category}
              key={p.id}
              id={p.id}
              image={p.image}
              price={p.price}
              productDescription={p.description}
            />
          ))}
    </div>
  );
};

export { Products };
