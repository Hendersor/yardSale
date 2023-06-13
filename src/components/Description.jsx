import React from "react";
import { RxCross2 } from "react-icons/rx";

const Description = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-white max-w-xs md:right-0 md:h-[500px] lg:h-[520px]">
      <figure className="w-full h-1/2 relative">
        <img
          className="w-full h-full object-contain"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="product image"
        />

        <div className="hidden absolute w-10 h-10 rounded-full bg-slate-100 md:flex justify-center items-center cursor-pointer top-2 left-2">
          <RxCross2 />
        </div>
      </figure>

      <div className="w-full h-1/2 flex flex-col justify-evenly items-center text-gray-500">
        <p className="self-start px-4">
          <span className="font-[500] text-black">$120,00</span>
          <br />
          Retro refrigerator
        </p>

        <p className="px-4 text-sm">
          With this functional and practical interior, this refrigerator also
          fulfills a decorative function, adding personality and a retro-vintage
          aesthetic to your kitchen or workplace
        </p>

        <button className="bg-[#ACD9B2] w-11/12 h-12 rounded-lg text-white cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export { Description };
