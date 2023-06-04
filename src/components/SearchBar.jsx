import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full h-36 px-2 flex flex-col justify-between font-['Quicksand']">
      <div className="flex justify-start items-center h-10 rounded-lg bg-slate-100">
        <img
          className="mx-2"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685834726/ShapeLupa_gb9f4d.png"
          alt=""
        />
        <input
          type="text"
          placeholder="Search product"
          className="w-full h-full bg-slate-100"
        />
      </div>

      <ul className="flex flex-wrap justify-evenly items-center h-20 text-[#C7C7C7]">
        <li className="hover:text-[#ACD9B2] cursor-pointer">Electronics</li>
        <li className="hover:text-[#ACD9B2] cursor-pointer">Jewelery</li>
        <li className="hover:text-[#ACD9B2] cursor-pointer">Men's Clothing</li>
        <li className="hover:text-[#ACD9B2] cursor-pointer">
          Women's Clothing
        </li>
      </ul>
    </div>
  );
};

export { SearchBar };
