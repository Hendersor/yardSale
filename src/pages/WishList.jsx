import React from "react";
import { FavoriteP } from "../components/FavoriteP";
import { NavBar } from "../components/NavBar";
import "../styles/tailwind.css";

const WishList = () => {
  return (
    <div className="w-full h-screen">
      <NavBar />
      <h1 className="font-medium md:text-lg my-2 text-center">Wish List</h1>

      <div className="w-full h-auto py-2.5 flex flex-col justify-start content-evenly items-center">
        <FavoriteP />
        <FavoriteP />
        <FavoriteP />
      </div>
    </div>
  );
};

export { WishList };
