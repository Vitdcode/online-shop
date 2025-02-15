import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const AddToCartButton = ({ product }) => {
  const { cart, setCart, cartCount, setCartcount } = useOutletContext();

  const handleAddToCart = () => {
    setCartcount(cartCount + 1);
    setCart([
      ...cart,
      {
        quantitiy: 1,
        imageUrl: product.imageUrl,
        price: product.price,
        title: product.name,
      },
    ]);
    console.log(product);
    console.log(cart);
  };

  return (
    <button
      onClick={() => handleAddToCart()}
      className="bg-teal-500 text-white rounded-xl p-4 w-[80%] mt-10 mb-10 text-3xl 
    hover:shadow-2xl hover:cursor-pointer hover:translate-y-1 transition  duration-200 active:bg-teal-400"
    >
      🛒 Add to Cart
    </button>
  );
};

export default AddToCartButton;
