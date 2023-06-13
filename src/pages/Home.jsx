import React from "react";
import { NavBar } from "../components/NavBar";
import { SearchBar } from "../components/SearchBar";
import { Products } from "../components/Products";

const Home = () => {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <Products />
    </div>
  );
};

export { Home };
