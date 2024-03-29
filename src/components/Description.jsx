import React, { useContext, useEffect } from "react";
import { addToList } from "../addTo";
import { ProductsContext } from "../context";

const Description = ({
  description,
  setDescription,
  image,
  price,
  ProductDescription,
  name,
  id,
}) => {
  const handleDescription = () => {
    setDescription(!description);
  };

  const { cartElements, saveCartProduct } = useContext(ProductsContext);
  const { productData } = useContext(ProductsContext);
  const { setNewProductNot } = useContext(ProductsContext);

  const handleCart = (id) => {
    addToList(id, cartElements, productData, saveCartProduct);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-[530px] bg-white max-w-xs md:right-0 md:h-[500px] lg:h-[520px]">
      <figure className="w-full h-1/2 relative">
        <img
          className="w-full h-full object-contain"
          src={image}
          alt="product image"
        />

        <figure className="flex absolute w-10 h-10 rounded-full bg-slate-100  justify-center items-center cursor-pointer top-2 left-2">
          <img
            src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1694544003/x_f7l23c.svg"
            className=""
            onClick={() => handleDescription()}
          />
        </figure>
      </figure>

      <div className="w-full h-1/2 flex flex-col justify-evenly items-center text-gray-500">
        <p className="self-start px-4">
          <span className="font-[500] text-black">{`$${price}`}</span>
          <br />
          {name}
        </p>

        <p className="px-4 text-sm overflow-hidden line-clamp-2">
          {ProductDescription}
        </p>

        <button
          onClick={() => {
            handleCart(id);
            setNewProductNot(true);
          }}
          className="bg-[#ACD9B2] w-11/12 h-12 rounded-lg text-white cursor-pointer"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export { Description };
