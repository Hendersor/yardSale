import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import { SearchBar } from "../components/SearchBar";
import { Products } from "../components/Products";

const Home = () => {
  const [description, setDescription] = useState(false);
  return (
    <div>
      <NavBar />
      <SearchBar description={description} setDescription={setDescription} />
      <Products setDescription={setDescription} description={description} />
    </div>
  );
};

export { Home };
