import React, { useContext } from "react";
import { FavoriteP } from "../components/FavoriteP";
import { NavBar } from "../components/NavBar";
import { ProductsContext } from "../context";
import { addToList } from "../addTo";
import "../styles/tailwind.css";

const WishList = () => {
  const { wishElements } = useContext(ProductsContext);
  const { cartElements, saveCartProduct } = useContext(ProductsContext);
  const { productData } = useContext(ProductsContext);

  const handleCart = (id) => {
    addToList(id, cartElements, productData, saveCartProduct);
  };

  return (
    <div className="w-full h-auto">
      <NavBar />
      <h1 className="font-medium md:text-lg my-2 text-center">Wish List</h1>

      <div className="w-full h-auto py-2.5 flex flex-col justify-start content-evenly items-center">
        {wishElements.length !== 0 ? (
          wishElements.map((p) => (
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
