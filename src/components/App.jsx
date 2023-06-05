import React from "react";
import { Nav } from "./Nav";
import { SearchBar } from "./SearchBar";
import { Products } from "./Products";
import "../styles/tailwind.css";

const App = () => {
  return (
    <main>
      <Nav />
      <SearchBar />
      <Products />
    </main>
  );
};

export { App };
