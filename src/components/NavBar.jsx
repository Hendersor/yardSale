import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { AiOutlineHeart } from "react-icons/ai";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleNavigate = (path) => {
    navigate(path);
    setActiveLink(path);
  };

  return (
    <nav className="w-full h-14 relative flex justify-between px-2 md:w-11/12 md:my-0 md:mx-auto lg:relative">
      <figure className="h-full w-10  flex justify-center items-center lg:hidden">
        <AiOutlineHeart
          className="text-2xl"
          onClick={() => handleNavigate("/wish")}
        />
      </figure>

      <figure
        className="h-full w-28  flex justify-center items-center"
        onClick={() => handleNavigate("/")}
      >
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

      <figure className="h-full w-16  flex justify-center  lg:justify-between items-center ">
        <AiOutlineHeart
          className="hidden lg:flex text-2xl cursor-pointer"
          onClick={() => handleNavigate("/wish")}
        />

        <img
          onClick={() => handleNavigate("/cart")}
          className="cursor-pointer"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685834726/ShapeCart_jcz83w.png"
          alt="cartIcon"
        />
      </figure>
    </nav>
  );
};

export { NavBar };
