import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context";
import { fetchData } from "../apiConnection";
import { Product } from "./Product";
import { LoadingSkeleton } from "./LoadingSkeleton";

const Products = ({ setDescription, description }) => {
  const API = "https://fakestoreapi.com/products";
  const { productData, setProductData } = useContext(ProductsContext);
  const { filteredData } = useContext(ProductsContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await fetchData(API);
        setProductData(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products", error);
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="w-full h-auto px-4 flex flex-wrap justify-evenly items-start gap-2 py-2">
      {loading ? (
        <LoadingSkeleton />
      ) : (
        (filteredData.length === 0 ? productData : filteredData).map((p) => (
          <Product
            setDescription={setDescription}
            title={p.title}
            category={p.category}
            key={p.id}
            id={p.id}
            image={p.image}
            price={p.price}
            productDescription={p.description}
          />
        ))
      )}
    </div>
  );
};

export { Products };
