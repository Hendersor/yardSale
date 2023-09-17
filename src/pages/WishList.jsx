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
    <div className="w-full h-screen">
      <NavBar />

      {wishElements.length !== 0 ? (
        <h1 className="font-medium md:text-lg my-2 text-center">Wish List</h1>
      ) : (
        ""
      )}
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
          <div className="w-full h-[50vh] flex flex-col items-center justify-center lg:h-full">
            <img
              className="w-4/5 md:w-2/4 "
              src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1687034497/wish_eok6jg.svg"
              alt="wish list icon"
            />
            {wishElements.length === 0 ? (
              <h1 className="md:text-lg w-3/5 text-center mt-5">
                Your wishlist is waiting. Add products!
              </h1>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { WishList };
