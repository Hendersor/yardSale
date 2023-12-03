import React from "react";

const OrderProduct = ({ name, image, price }) => {
  return (
    <div className="h-20 w-11/12 px-2 max-w-3xl flex justify-evenly my-2 bg-[#F7F7F7] rounded-lg">
      <figure className="h-22 w-16">
        <img
          className="w-full h-full object-contain"
          src={image}
          alt="product image"
        />
      </figure>

      <div className="flex justify-between h-full w-4/5 items-center px-0.5">
        <p className="text-[#C7C7C7] w-1/2 text-sm overflow-hidden line-clamp-1 ">
          {name}
        </p>

        <div className="justify-between items-center flex">
          <p className="font-medium text-sm">{`$${price.toFixed(2)}`}</p>
        </div>
      </div>
    </div>
  );
};

export { OrderProduct };
