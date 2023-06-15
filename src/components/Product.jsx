import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const Product = ({
  setDescription,
  description,
  title,
  category,
  id,
  image,
  price,
  productDescription,
}) => {
  const handleDescription = () => {
    setDescription(!description);
  };
  return (
    <div className="w-32 h-44  flex flex-col justify-between border-solid border-2 border-[#C7C7C7] rounded-lg px-2 md:w-36">
      <figure className="h-1/2 w-full cursor-pointer">
        <img
          className="object-contain cursor-pointer w-full h-full"
          onClick={() => handleDescription()}
          src={image}
          alt=""
        />
      </figure>
      <div className="flex flex-col h-1/2 justify-between ">
        <figure className="flex justify-between items-center w-full h-1/2 px-2">
          <img
            className="cursor-pointer w-10"
            src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685915411/bt_add_to_cart_snin80.png"
            alt="buyIcon"
          />

          <AiOutlineHeart className="text-xl cursor-pointer" />
        </figure>
        <div className="h-1/2 w-full md:flex md:justify-between md:items-center">
          <p className="text-sm overflow-hidden line-clamp-2">
            {title}
          </p>
          <h3 className="text-sm font-medium">{`$${price}`}</h3>
        </div>
      </div>
    </div>
  );
};

export { Product };
