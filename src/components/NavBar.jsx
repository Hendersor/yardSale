import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import { ProductsContext } from "../context";
import { AiOutlineHeart } from "react-icons/ai";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleNavigate = (path) => {
    navigate(path);
    setActiveLink(path);
  };

  const { productData } = useContext(ProductsContext);
  const { setFilteredData } = useContext(ProductsContext);

  const handleFilter = (e) => {
    const category = e.target.textContent.toLowerCase();
    const filteredData = productData.filter((p) => p.category === category);
    if (filteredData.length === 0) {
      setFilteredData([]);
    }
    setFilteredData(filteredData);
  };

  const { setNewWishNot, newWishNot } = useContext(ProductsContext);
  const { newProductNot, setNewProductNot } = useContext(ProductsContext);

  return (
    <nav className="w-full h-14 relative flex items-center justify-between px-2 md:w-11/12 md:my-0 md:mx-auto lg:relative">
      <figure className="h-1/2 w-10 relative flex justify-center items-center lg:hidden">
        <AiOutlineHeart
          className="text-2xl"
          onClick={() => {
            handleNavigate("/wish");
            setNewWishNot(false);
          }}
        />
        {newWishNot && (
          <div className="w-2 h-2 rounded-full bg-red-600 absolute top-0 right-1" />
        )}
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

      <ul className="hidden md:hidden lg:flex  items-center h-14 w-full overflow-auto text-[#C7C7C7] gap-x-4 mx-4 md:justify-center md:w-2/3 lg:absolute lg:left-10">
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
          className="hover:text-[#ACD9B2] cursor-pointer"
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

      <figure className="h-1/2 w-auto relative flex justify-center  lg:justify-between lg:w-16 items-center">
        <AiOutlineHeart
          className="hidden lg:flex text-2xl cursor-pointer"
          onClick={() => {
            handleNavigate("/wish");
            setNewWishNot(false);
          }}
        />
        {newWishNot && (
          <div className="hidden lg:flex w-2 h-2 rounded-full bg-red-600 absolute top-0 left-0" />
        )}

        <img
          onClick={() => {
            handleNavigate("/cart");
            setNewProductNot(false);
          }}
          className="cursor-pointer"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685834726/ShapeCart_jcz83w.png"
          alt="cartIcon"
        />
        {newProductNot && (
          <div className="w-2 h-2 rounded-full bg-[#ACD9B2] absolute top-0 right-0 " />
        )}
      </figure>
    </nav>
  );
};

export { NavBar };
