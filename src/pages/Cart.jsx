import React, { useContext, useEffect } from "react";
import { NavBar } from "../components/NavBar";
import { ProductsContext } from "../context";
import "../styles/tailwind.css";
import { CartProduct } from "../components/CartProduct";
import { Product } from "../components/Product";
import { handleCheckout } from "../addTo";

const Cart = () => {
  const { cart, setCart } = useContext(ProductsContext);
  const { total, setTotal } = useContext(ProductsContext);

  useEffect(() => {
    handleCheckout(cart, setTotal);
  }, [cart]);

  const removeItem = (id) => {
    const productIndex = cart.findIndex((p) => p.id === id);
    const newCart = [...cart];
    newCart.splice(productIndex, 1);
    setCart(newCart);
  };
  return (
    <div className="w-full h-screen flex flex-col items-center relative">
      <NavBar />

      <h1 className="font-medium md:text-lg my-2">Shopping cart</h1>

      <div className="w-full h-80 flex flex-col content-evenly items-center overflow-auto">
        {cart.length !== 0
          ? cart.map((p) => (
              <CartProduct
                name={p.title}
                price={p.price}
                img={p.image}
                key={p.id}
                removeItem={removeItem}
              />
            ))
          : ""}
      </div>

      <div className=" h-40 w-full flex flex-col  justify-between px-2 py-2 absolute bottom-0 md:items-center">
        <div
          className={`w-full h-16 justify-between items-center px-2 font-medium bg-[#F7F7F7] rounded-lg md:w-1/2 lg:w-2/5 ${
            total !== 0 ? "flex" : "hidden"
          }`}
        >
          <p>Total</p>
          <p>{`$${total}`}</p>
        </div>
        <button
          className={`text-white bg-[#ACD9B2] h-12 rounded-lg cursor-pointer md:w-1/2 lg:w-2/5 ${
            total === 0 ? "disabled:opacity-50" : ""
          }`}
          disabled={total === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export { Cart };
