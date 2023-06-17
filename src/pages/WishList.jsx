import React, { useContext } from "react";
import { FavoriteP } from "../components/FavoriteP";
import { NavBar } from "../components/NavBar";
import { ProductsContext } from "../context";
import { addTo } from "../addTo";
import "../styles/tailwind.css";

const WishList = () => {
  const { wish, setWish } = useContext(ProductsContext);
  const { cart, setCart } = useContext(ProductsContext);
  const { productData } = useContext(ProductsContext);

  const handleCart = (id) => {
    const product = addTo(productData, id);
    const newProducts = [...cart, product[0]];
    setCart(newProducts);
  };

  const removeItem = (id) => {
    const productIndex = wish.findIndex((p) => p.id === id);
    const newWish = [...wish];
    newWish.splice(productIndex, 1);
    setWish(newWish);
  };
  return (
    <div className="w-full h-screen">
      <NavBar />
      <h1 className="font-medium md:text-lg my-2 text-center">Wish List</h1>

      <div className="w-full h-auto py-2.5 flex flex-col justify-start content-evenly items-center">
        {wish.length !== 0
          ? wish.map((p) => (
              <FavoriteP
                image={p.image}
                name={p.title}
                price={p.price}
                key={p.id}
                removeItem={removeItem}
                handleCart={handleCart}
                id={p.id}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export { WishList };
