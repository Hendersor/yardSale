import React, { useContext, useEffect } from "react";
import "../styles/tailwind.css";
import { handleTotal } from "../addTo";
import { ProductsContext } from "../context";

const OrderList = ({ quantity, date, products, id, setOrder, order }) => {
  const { ordersElements } = useContext(ProductsContext);

  const total = handleTotal(products);
  const displayOrder = (p) => {
    const orderSelected = ordersElements.filter((p) => p.id === id);
    setOrder(orderSelected[0]);
  };

  useEffect(() => {
    if (order && order[0] && order[0].id === id) {
      console.log(order);
    }
  }, [order, id]);
  return (
    <div
      onClick={(p) => displayOrder(p)}
      className=" flex h-14 w-5/6 px-2 border-solid border-2 border-black mb-3 rounded-md cursor-pointer"
    >
      <div className=" w-2/4 flex flex-col justify-center">
        <p>{date}</p>
        <p>{`${quantity} articles`}</p>
      </div>

      <div className=" w-2/4 flex justify-end items-center">
        <p>{`$${total}`}</p>
        <figure className="w-5 h-5 ml-2">
          {order.length === 0 ? (
            <img
              src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1694313218/chevron-right_yi02fr.svg"
              alt="chevron right icon"
            />
          ) : (
            ""
          )}
        </figure>
      </div>
    </div>
  );
};

export { OrderList };
