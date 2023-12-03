import React, { useContext, useState } from "react";
import { NavBar } from "../components/NavBar";
import { OrderList } from "../components/OrderList";
import { OrderProduct } from "../components/OrderProduct";
import "../styles/tailwind.css";
import { ProductsContext } from "../context";

const Orders = () => {
  const { ordersElements, saveOrders } = useContext(ProductsContext);
  const [order, setOrder] = useState([]);

  return (
    <section className="h-screen w-full flex flex-col">
      <NavBar />
      <div
        className="w-full h-auto mb-5
       flex flex-col items-center font-[Quicksand] md:w-2/4 md:self-center lg:w-2/4 lg:self-center"
      >
        {order.length === 0 ? (
          <h1
            className={`font-medium my-5 md:text-lg ${
              ordersElements.length === 0 ? "hidden" : "flex"
            }`}
          >
            My orders
          </h1>
        ) : (
          <div className="flex">
            <img
              className="cursor-pointer"
              onClick={() => setOrder([])}
              src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1694313218/chevron-left_i6biee.svg"
              alt="return to orders icon"
            />
            <h1 className="my-5">My order</h1>
          </div>
        )}

        {order.length === 0 ? (
          ordersElements.map((p) => (
            <OrderList
              id={p.id}
              key={p.id}
              quantity={p.products.length}
              date={p.date}
              products={p.products}
              setOrder={setOrder}
              order={order}
            />
          ))
        ) : (
          <div className="w-4/5 h-auto flex flex-col items-center">
            <OrderList
              id={order.id}
              key={order.id}
              quantity={order.products.length}
              date={order.date}
              products={order.products}
              setOrder={setOrder}
              order={order}
            />
            {order.products.map((p) => (
              <OrderProduct
                key={p.id}
                name={p.title}
                image={p.image}
                price={p.price}
              />
            ))}
          </div>
        )}
      </div>

      {order.length === 0 && ordersElements.length !== 0 ? (
        <button
          className="bg-red-500 hover:bg-red-600 text-white h-10 w-24 font-bold py-2 px-4 rounded self-center"
          onClick={() => saveOrders([])}
        >
          Delete
        </button>
      ) : (
        ""
      )}

      {ordersElements.length === 0 ? (
        <div className="w-full h-[50vh] flex flex-col items-center justify-center lg:h-full">
          <img
            className="w-4/5 md:w-2/4"
            src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1694315523/undraw_empty_re_opql_c4o5c3.svg"
            alt="orders empty"
          />

          <h1 className="md:text-lg w-3/5 text-center mt-5">
            You haven't placed any orders yet. Let's get shopping!
          </h1>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
export { Orders };
