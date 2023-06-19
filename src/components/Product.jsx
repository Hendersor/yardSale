import React, { useContext, useEffect, useState } from "react";
import { handleTotal, addToList } from "../addTo";
import { ProductsContext } from "../context";
import { AiOutlineHeart } from "react-icons/ai";

const Product = ({ setDescription, title, id, image, price }) => {
  const { setProduct, productData } = useContext(ProductsContext);
  const { saveCartProduct } = useContext(ProductsContext);

  const handleDescription = () => {
    const selectedProduct = productData.filter((p) => p.id === id);
    setProduct(selectedProduct[0]);
    setDescription(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { cartElements } = useContext(ProductsContext);
  const { setTotal } = useContext(ProductsContext);

  useEffect(() => {
    handleTotal(cartElements, setTotal);
  }, [cartElements]);

  const handleCart = (id) => {
    addToList(id, cartElements, productData, saveCartProduct);
  };

  const { wishElements } = useContext(ProductsContext);
  const { saveWishProduct } = useContext(ProductsContext);
  const handleWish = (id) => {
    addToList(id, wishElements, productData, saveWishProduct);
  };

  const [animation, setAnimation] = useState(false);

  const handleAnimation = () => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 350);
  };

  const { setNewWishNot } = useContext(ProductsContext);
  const { setNewProductNot } = useContext(ProductsContext);
  return (
    <div
      className={`w-32 h-44 flex flex-col justify-between border-solid border-2 border-[#C7C7C7] rounded-lg px-2 md:w-36 transition-transform duration-100 ${
        animation ? "transform scale-110" : ""
      }`}
    >
      <figure className="h-1/2 w-full cursor-pointer">
        <img
          id={id}
          className="object-contain cursor-pointer w-full h-full"
          onClick={() => handleDescription(id)}
          src={image}
          alt="product Image"
        />
      </figure>
      <div className="flex flex-col h-1/2 justify-between ">
        <figure className="flex justify-between items-center w-full h-1/2 px-2">
          <img
            id={id}
            onClick={() => {
              handleCart(id);
              setNewProductNot(true);
              handleAnimation();
            }}
            className="cursor-pointer w-10"
            src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685915411/bt_add_to_cart_snin80.png"
            alt="buyIcon"
          />

          <AiOutlineHeart
            className="text-xl cursor-pointer"
            onClick={() => {
              handleWish(id);
              setNewWishNot(true);
              handleAnimation();
            }}
          />
        </figure>
        <div className="h-1/2 w-full flex items-center justify-center md:flex md:justify-between md:items-center">
          <p className="text-sm overflow-hidden line-clamp-2">{title}</p>
          <h3 className="text-sm font-medium">{`$${price}`}</h3>
        </div>
      </div>
    </div>
  );
};

export { Product };
