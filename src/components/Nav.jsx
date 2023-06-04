import React from "react";

const Nav = () => {
  return (
    <nav className="w-full h-14 flex justify-between px-2">
      <figure className="h-full w-10  flex justify-center items-center ">
        <img
          className="cursor-pointer"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685834726/Shape_l1tnzh.png"
          alt="barIcon"
        />
      </figure>

      <figure className="h-full w-28  flex justify-center items-center">
        <img
          className="cursor-pointer"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685834733/logo_yard_sale_nxb2do.png"
          alt="yardSaleIcon"
        />
      </figure>

      <figure className="h-full w-10  flex justify-center items-center ">
        <img
          className="cursor-pointer"
          src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1685834726/ShapeCart_jcz83w.png"
          alt="cartIcon"
        />
      </figure>
    </nav>
  );
};

export { Nav };
