import React from "react";
import { Product } from "./Product";

const Products = () => {
  return (
    <div className="w-full h-auto px-2 flex flex-wrap justify-evenly items-start gap-2 py-2">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export { Products };
