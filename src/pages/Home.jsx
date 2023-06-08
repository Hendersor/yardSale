import React from "react";
import { FilterNav } from "../components/FilterNav";
import { SearchBar } from "../components/SearchBar";
import { Products } from "../components/Products";

const Home = () => {
  return (
    <div>
      <FilterNav />
      <SearchBar />
      <Products />
    </div>
  );
};

export { Home };
