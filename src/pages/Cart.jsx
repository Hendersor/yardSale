import React from "react";
import { NavBar } from "../components/NavBar";
import "../styles/tailwind.css";

import { CartProduct } from "../components/CartProduct";

const Cart = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center relative">
      <NavBar />

      <h1 className="font-medium md:text-lg my-2">Shopping cart</h1>

      <div className="w-full h-80 flex flex-col content-evenly items-center overflow-auto">
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>

      <div className=" h-40 w-full flex flex-col  justify-between px-2 py-2 absolute bottom-0 md:items-center">
        <div className="w-full h-16 flex justify-between items-center px-2 font-medium bg-[#F7F7F7] rounded-lg md:w-1/2 lg:w-2/5">
          <p>Total</p>
          <p>$560.00</p>
        </div>
        <button className="text-white bg-[#ACD9B2] h-12 rounded-lg cursor-pointer md:w-1/2 lg:w-2/5">
          Checkout
        </button>
      </div>
    </div>
  );
};

export { Cart };
