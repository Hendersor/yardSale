import React from "react";

const Product = () => {
  return (
    <div className="w-34 h-44  flex flex-col justify-between border-solid border-2 border-[#C7C7C7] rounded-lg px-2">
      <figure className="h-1/2 w-full cursor-pointer">
        <img
          className="object-contain w-full h-full"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
      </figure>
      <div className="flex  justify-between h-11">
        <div className="">
          <h3 className="font-medium">$120.00</h3>
          <p className="text-sm">Backpack</p>
        </div>
        <figure className="flex content-center items-center w-9">
          <img
            className="cursor-pointer"
            src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685915411/bt_add_to_cart_snin80.png"
            alt="buyIcon"
          />
        </figure>
      </div>
    </div>
  );
};

export { Product };
