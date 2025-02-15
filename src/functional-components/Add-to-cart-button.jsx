import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

const AddToCartButton = ({ product }) => {
  const { cart, setCart, cartCount, setCartcount } = useOutletContext();

  const handleAddToCart = () => {
    setCartcount(cartCount + 1);
    setCart([
      ...cart,
      {
        quantity: 1,
        imageUrl: product.imageUrl,
        price: product.price,
        title: product.name,
        id: product.id,
        freeShipping: product.freeShipping,
        inStock: product.inStock,
      },
    ]);
  };

  return (
    <div className="flex justify-center w-full">
      {product.inStock ? (
        <button
          onClick={() => handleAddToCart()}
          className=" bg-teal-500 text-white  rounded-xl p-4 w-[80%] mt-10 mb-10 text-3xl flex justify-center items-center gap-3 
    hover:shadow-2xl hover:cursor-pointer hover:translate-y-1 transition  duration-200 active:bg-teal-400"
        >
          <FaCartArrowDown /> Add to Cart
        </button>
      ) : (
        <span
          className="flex justify-center items-center gap-3 bg-gray-500 text-white rounded-xl p-4 mt-10 mb-10 text-3xl 
        hover:shadow-2xl hover:cursor-pointer hover:translate-y-1 transition  duration-200 active:bg-teal-400"
        >
          Out of Stock
        </span>
      )}
    </div>
  );
};

export default AddToCartButton;
