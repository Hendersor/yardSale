import React, { useContext, useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { ProductsContext } from "../context";
import "../styles/tailwind.css";
import { CartProduct } from "../components/CartProduct";
import { handleTotal } from "../addTo";

const Cart = () => {
  const { cart, setCart } = useContext(ProductsContext);
  const { total, setTotal } = useContext(ProductsContext);

  useEffect(() => {
    handleTotal(cart, setTotal);
  }, [cart]);

  const removeItem = (id) => {
    const productIndex = cart.findIndex((p) => p.id === id);
    const newCart = [...cart];
    newCart.splice(productIndex, 1);
    setCart(newCart);
  };

  const [svgCompletedVisible, setSvgCompletedVisible] = useState(false);
  const [svgEmpty, setSvgEmpty] = useState(true);
  const handleCheckoutButton = () => {
    setCart([]);
    setSvgCompletedVisible(!svgCompletedVisible);
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
        {svgCompletedVisible && (
          <img
            className="w-40 lg:w-52"
            src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1687023320/completed_ktmuoz.svg"
            alt="completedIcon"
          />
        )}

        {cart.length === 0 && svgCompletedVisible !== true ? (
          <img
            className="w-40 lg:w-52"
            src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1687031140/undraw_empty_cart_co35_1_xq4jac.svg"
            alt="empty cart icon"
          />
        ) : (
          ""
        )}
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
            total === 0 ? "hidden" : ""
          }`}
          disabled={total === 0}
          onClick={() => handleCheckoutButton()}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

// disabled:opacity-50

export { Cart };
