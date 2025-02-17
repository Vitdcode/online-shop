import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

const AddToCartButton = ({ product, idNameStock, idNameNoStock }) => {
  const { cart, setCart, cartCount, setCartcount } = useOutletContext();

  const handleAddToCart = (e) => {
    e.preventDefault();
    setCartcount(cartCount + 1);
    const idExistsIndex = cart.findIndex((item) => item.id === product.id);

    if (idExistsIndex != -1) {
      return setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          quantity: 1,
          image: product.image,
          price: product.price,
          title: product.title,
          id: product.id,
          freeShipping: product.freeShipping,
          inStock: product.inStock,
        },
      ]);
    }
  };

  return (
    <div className="flex justify-center w-full" onClick={handleAddToCart}>
      {product.inStock > 0 && (
        <button
          id={idNameStock}
          className=" bg-teal-500 text-white  rounded-xl p-4 w-[80%] mt-10 mb-10 text-3xl flex justify-center items-center gap-3 
    hover:shadow-2xl hover:cursor-pointer hover:translate-y-1 transition  duration-200 active:bg-teal-400"
        >
          <FaCartArrowDown /> Add to Cart
        </button>
      )}
    </div>
  );
};

export default AddToCartButton;
