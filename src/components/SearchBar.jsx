import React, { useContext, useState } from "react";
import { ProductsContext } from "../context";
import { Description } from "./Description";

const SearchBar = ({ description, setDescription }) => {
  const { product, productData } = useContext(ProductsContext);
  const { setFilteredData } = useContext(ProductsContext);

  const handleFilter = (e) => {
    const category = e.target.textContent.toLowerCase();
    const filteredData = productData.filter((p) => p.category === category);
    if (filteredData.length === 0) {
      setFilteredData([]);
    }
    setFilteredData(filteredData);
  };

  const handleInput = (e) => {
    const userSearch = e.target.value.toLowerCase();
    const filteredData2 = productData.filter((p) => {
      return p.title.toLowerCase().includes(userSearch);
    });
    setFilteredData(filteredData2);
  };

  return (
    <div className="relative w-full h-28 px-4 flex flex-col justify-between font-['Quicksand'] md:items-center lg:h-20 lg:items-start lg:justify-center lg:px-10">
      <div className="flex justify-start items-center h-10 rounded-lg bg-slate-100 md:w-2/3 lg:w-80">
        <img
          className="mx-2"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685834726/ShapeLupa_gb9f4d.png"
          alt=""
        />
        <input
          onChange={handleInput}
          type="text"
          placeholder="Search product"
          className="w-full h-full bg-slate-100 rounded-lg"
        />
      </div>
      <ul className="flex items-center h-14 w-full overflow-auto text-[#C7C7C7] gap-x-4 md:justify-center md:w-2/3 lg:hidden">
        <li
          className="hover:text-[#ACD9B2] cursor-pointer"
          onClick={handleFilter}
        >
          All
        </li>

        <li
          className="hover:text-[#ACD9B2] cursor-pointer"
          onClick={handleFilter}
        >
          Electronics
        </li>
        <li
          className="hover:text-[#ACD9B2] cursor-pointer "
          onClick={handleFilter}
        >
          Jewelery
        </li>
        <li
          className="hover:text-[#ACD9B2] cursor-pointer"
          onClick={handleFilter}
        >
          Men's Clothing
        </li>
        <li
          className="hover:text-[#ACD9B2] cursor-pointer"
          onClick={handleFilter}
        >
          Women's Clothing
        </li>
      </ul>
      {description && (
        <Description
          description={description}
          setDescription={setDescription}
          image={product.image}
          price={product.price}
          ProductDescription={product.description}
          name={product.title}
          key={product.id}
          id={product.id}
        />
      )}
    </div>
  );
};

export { SearchBar };
