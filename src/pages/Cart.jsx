import React, { useContext, useState } from "react";
import { NavBar } from "../components/NavBar";
import { ProductsContext } from "../context";
import "../styles/tailwind.css";
import { CartProduct } from "../components/CartProduct";
import { createOrder } from "../addTo";

const Cart = () => {
  const { cartElements, saveCartProduct } = useContext(ProductsContext);
  const { total } = useContext(ProductsContext);
  const { ordersElements, saveOrders } = useContext(ProductsContext);
  const { setNewOrderNot } = useContext(ProductsContext);

  const [svgCompletedVisible, setSvgCompletedVisible] = useState(false);
  const handleCheckoutButton = () => {
    createOrder(cartElements, saveOrders, ordersElements);
    saveCartProduct([]);
    setSvgCompletedVisible(!svgCompletedVisible);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center relative">
      <NavBar />

      {cartElements.length !== 0 ? (
        <h1 className="font-medium md:text-lg my-2">Shopping cart</h1>
      ) : (
        ""
      )}

      <div className="w-full h-auto flex flex-col content-evenly items-center justify-center overflow-auto">
        {cartElements.length !== 0
          ? cartElements.map((p) => (
              <CartProduct
                name={p.title}
                price={p.price}
                img={p.image}
                key={p.id}
                id={p.id}
              />
            ))
          : ""}
        {svgCompletedVisible && (
          <figure className="w-full h-[50vh] flex flex-col items-center justify-center lg:h-full">
            <img
              className="w-4/5 md:w-2/4"
              src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1694315524/undraw_on_the_way_re_swjt_ba8ogo.svg"
              alt="completedIcon"
            />
            <h1 className="md:text-lg w-3/5 text-center mt-5">
              Your order is in. Thank you!
            </h1>
          </figure>
        )}

        {cartElements.length === 0 && svgCompletedVisible !== true ? (
          <figure className="w-full h-full flex flex-col items-center justify-center lg:h-full">
            <img
              className="w-4/5 md:w-2/4"
              src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1687031140/undraw_empty_cart_co35_1_xq4jac.svg"
              alt="empty cart icon"
            />
            {cartElements.length === 0 ? (
              <h1 className="md:text-lg w-3/5 text-center mt-5">
                Cart's looking lonely. Shop away!
              </h1>
            ) : (
              ""
            )}
          </figure>
        ) : (
          ""
        )}

        {cartElements.length !== 0 ? (
          <div className=" h-36 w-full flex flex-col  justify-between px-2 py-2  md:items-center">
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
              onClick={() => {
                handleCheckoutButton(), setNewOrderNot(true);
              }}
            >
              Checkout
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export { Cart };
