import React from "react";

const FavoriteP = ({ image, name, price, removeItem }) => {
  return (
    <div className="h-24 w-11/12 max-w-sm flex justify-between bg-[#F7F7F7] rounded-lg px-2 mb-2.5">
      <figure className="h-full w-16">
        <img src={image} alt="image product" />
      </figure>

      <div className="flex flex-col items-start justify-center justify-self-start">
        <h3>{name}</h3>
        <h3>{`$${price}`}</h3>
      </div>
      <div className="flex items-center justify-between w-16">
        <img
          className="w-10 h-10 cursor-pointer"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685915411/bt_add_to_cart_snin80.png"
          alt="cart Icon"
        />
        <img
          onClick={removeItem}
          className="w-3 h-3 cursor-pointer"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1686019243/Shape_xtog4c.png"
          alt="cross icon"
        />
      </div>
    </div>
  );
};

export { FavoriteP };
