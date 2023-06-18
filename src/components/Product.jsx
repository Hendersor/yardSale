import React, { useContext, useEffect, useState } from "react";
import { addTo, handleTotal } from "../addTo";
import { ProductsContext } from "../context";
import { AiOutlineHeart } from "react-icons/ai";

const Product = ({ setDescription, description, title, id, image, price }) => {
  const { setProduct, productData } = useContext(ProductsContext);
  const handleDescription = () => {
    const selectedProduct = productData.filter((p) => p.id === id);
    setProduct(selectedProduct[0]);
    setDescription(!description);
  };

  const { cart, setCart } = useContext(ProductsContext);
  const { setTotal } = useContext(ProductsContext);

  useEffect(() => {
    handleTotal(cart, setTotal);
  }, [cart]);

  const handleCart = (id) => {
    const product = addTo(productData, id);
    const isProductInTheCart = cart.some((p) => p.id === product[0].id);

    if (!isProductInTheCart) {
      const newProducts = [...cart, product[0]];
      setCart(newProducts);
    }
  };

  const { wish, setWish } = useContext(ProductsContext);
  const handleWish = (id) => {
    const product = addTo(productData, id);
    const isProductInTheWishList = wish.some((p) => p.id === product[0].id);
    if (!isProductInTheWishList) {
      const newProducts = [...wish, product[0]];
      setWish(newProducts);
    }
  };
  const { setNewWishNot } = useContext(ProductsContext);
  const { setNewProductNot } = useContext(ProductsContext);

  const [animation, setAnimation] = useState(false);

  const handleAnimation = () => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 350);
  };

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
