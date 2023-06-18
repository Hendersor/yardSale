import React from "react";

const CartProduct = ({ name, price, img, id, removeItem }) => {
  return (
    <div className="h-24 w-11/12 px-2 max-w-3xl flex justify-evenly my-2 bg-[#F7F7F7] rounded-lg ">
      <figure className="h-22 w-16">
        <img
          className="w-full h-full object-contain"
          src={img}
          alt="product image"
        />
      </figure>

      <div className="flex justify-between h-full w-4/5 items-center px-0.5 ">
        <p className="text-[#C7C7C7] w-1/2 text-sm overflow-hidden line-clamp-1 ">
          {name}
        </p>

        <div className="justify-between items-center flex w-28">
          <p className="font-medium text-sm">{`$${price}`}</p>
          <img
            id={id}
            onClick={() => removeItem(id)}
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
