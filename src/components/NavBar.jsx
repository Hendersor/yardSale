import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full h-14 flex justify-between px-2 md:w-11/12 md:my-0 md:mx-auto lg:relative">
      <figure className="h-full w-10  flex justify-center items-center lg:hidden">
        <img
          className="cursor-pointer"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685834726/Shape_l1tnzh.png"
          alt="barIcon"
        />
      </figure>

      <figure className="h-full w-28  flex justify-center items-center">
        <img
          className="cursor-pointer object-contain"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685834733/logo_yard_sale_nxb2do.png"
          alt="yardSaleIcon"
        />
      </figure>

      <ul className="hidden md:hidden lg:flex  items-center h-14 w-full overflow-auto text-[#C7C7C7] gap-x-4 md:justify-center md:w-2/3 lg:absolute lg:left-10">
        <li className="hover:text-[#ACD9B2] cursor-pointer">Electronics</li>
        <li className="hover:text-[#ACD9B2] cursor-pointer">Jewelery</li>
        <li className="hover:text-[#ACD9B2] cursor-pointer">Men's Clothing</li>
        <li className="hover:text-[#ACD9B2] cursor-pointer">
          Women's Clothing
        </li>
      </ul>

      <figure className="h-full w-10  flex justify-center items-center ">
        <img
          className="cursor-pointer"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685834726/ShapeCart_jcz83w.png"
          alt="cartIcon"
        />
      </figure>
    </nav>
  );
};

export { NavBar };
