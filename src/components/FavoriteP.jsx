import React from "react";

const FavoriteP = () => {
  return (
    <div className="h-24 w-11/12 flex justify-between bg-[#F7F7F7] rounded-lg px-2 mb-2.5">
      <figure className="h-full w-16">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="image product"
        />
      </figure>

      <div className="flex flex-col items-start justify-center">
        <h3>Round shelf</h3>
        <h3>$120,00</h3>
      </div>
      <div className="flex items-center justify-between w-16">
        <img
          className="w-10 h-10"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685915411/bt_add_to_cart_snin80.png"
          alt="cart Icon"
        />
        <img
          className="w-3 h-3"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1686019243/Shape_xtog4c.png"
          alt="cross icon"
        />
      </div>
    </div>
  );
};

export { FavoriteP };
