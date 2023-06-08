import React from "react";

const CartProduct = () => {
  return (
    <div className="h-24 w-11/12 flex my-2">
      <figure className="h-22 w-16 ">
        <img
          className="w-full h-full"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="product image"
        />
      </figure>

      <div className="flex justify-between h-full w-4/5 items-center px-0.5">
        <p className="text-[#C7C7C7]">Round shelf</p>

        <div className="justify-between items-center flex w-28">
          <p className="font-medium">$120.00</p>
          <img
            className="cursor-pointer"
            src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1686019243/Shape_xtog4c.png"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export { CartProduct };
