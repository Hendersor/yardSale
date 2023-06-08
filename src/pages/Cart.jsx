import React from "react";
import "../styles/tailwind.css";

import { CartProduct } from "../components/CartProduct";

const Cart = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center relative">
      <div className=" h-12 w-full flex items-center justify-center relative">
        <img
          className="absolute left-0 px-2"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685834726/Shape_l1tnzh.png"
          alt="menu icon"
        />
        <h1 className="absolute font-medium">Shopping cart</h1>
      </div>

      <div className="w-full h-96 flex flex-col content-evenly items-center overflow-auto">
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>

      <div className=" h-36 w-full flex flex-col justify-between px-2 py-2 absolute bottom-0">
        <div className="w-full h-16 flex justify-between items-center px-2 font-medium bg-[#F7F7F7] rounded-lg">
          <p>Total</p>
          <p>$560.00</p>
        </div>
        <button className="text-white bg-[#ACD9B2] h-12 rounded-lg cursor-pointer">
          Checkout
        </button>
      </div>
    </div>
  );
};

export { Cart };
