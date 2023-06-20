import React, { useContext } from "react";
import { ProductsContext } from "../context";
import { removeItemFromList } from "../addTo";

const FavoriteP = ({ image, name, price, id, handleCart }) => {
  const { setNewProductNot } = useContext(ProductsContext);
  const { wishElements, saveWishProduct } = useContext(ProductsContext);

  const handleRemove = () => {
    removeItemFromList(id, wishElements, saveWishProduct);
  };
  return (
    <div className="h-24 w-11/12 max-w-sm flex justify-between bg-[#F7F7F7] rounded-lg px-2 mb-2.5 ">
      <figure className="h-full w-16 flex items-center justify-center ">
        <img
          className="object-contain w-full h-full"
          src={image}
          alt="image product"
        />
      </figure>

      <div className="w-1/2 h-full flex flex-col items-start justify-center justify-self-start ">
        <h3 className=" line-clamp-1">{name}</h3>
        <h3>{`$${price.toFixed(2)}`}</h3>
      </div>
      <div className="w-1/3 h-full flex items-center justify-between">
        <img
          onClick={() => {
            handleCart(id);
            setNewProductNot(true);
          }}
          className="w-10 h-10 cursor-pointer"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685915411/bt_add_to_cart_snin80.png"
          alt="cart Icon"
        />
        <img
          onClick={handleRemove}
          className="w-3 h-3 cursor-pointer"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1686019243/Shape_xtog4c.png"
          alt="cross icon"
        />
      </div>
    </div>
  );
};

export { FavoriteP };
