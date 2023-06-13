import React from "react";
import { FavoriteP } from "../components/FavoriteP";
import "../styles/tailwind.css";

const WishList = () => {
  return (
    <div className="w-full h-screen ">
      <div className=" h-12 w-full flex items-center justify-center relative md:h-16">
        <img
          className="absolute left-0 px-2 cursor-pointer"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685834726/Shape_l1tnzh.png"
          alt="menu icon"
        />
        <h1 className="absolute font-medium md:text-lg">Wish List</h1>
      </div>

      <div className="w-full h-auto py-2.5 flex flex-col justify-start content-evenly items-center">
        <FavoriteP />
        <FavoriteP />
        <FavoriteP />
      </div>
    </div>
  );
};

export { WishList };
