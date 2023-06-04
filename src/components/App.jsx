import React from "react";
import { Nav } from "./Nav";
import { SearchBar } from "./SearchBar";
import "../styles/tailwind.css";

const App = () => {
  return (
    <main>
      <Nav />
      <SearchBar />
    </main>
  );
};

export { App };
