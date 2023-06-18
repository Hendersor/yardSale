import React, { useContext } from "react";
import { FavoriteP } from "../components/FavoriteP";
import { NavBar } from "../components/NavBar";
import { ProductsContext } from "../context";
import { addToList } from "../addTo";
import "../styles/tailwind.css";

const WishList = () => {
  const { wish } = useContext(ProductsContext);
  const { cart, setCart } = useContext(ProductsContext);
  const { productData } = useContext(ProductsContext);

  const handleCart = (id) => {
    addToList(id, setCart, cart, productData);
  };

  return (
    <div className="w-full h-auto">
      <NavBar />
      <h1 className="font-medium md:text-lg my-2 text-center">Wish List</h1>

      <div className="w-full h-auto py-2.5 flex flex-col justify-start content-evenly items-center">
        {wish.length !== 0 ? (
          wish.map((p) => (
            <FavoriteP
              image={p.image}
              name={p.title}
              price={p.price}
              key={p.id}
              handleCart={handleCart}
              id={p.id}
            />
          ))
        ) : (
          <img
            className="w-40 lg:w-52"
            src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1687034497/wish_eok6jg.svg"
            alt="wish list icon"
          />
        )}
      </div>
    </div>
  );
};

export { WishList };
