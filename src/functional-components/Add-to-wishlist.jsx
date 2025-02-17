import { useState } from "react";
import { GoHeart } from "react-icons/go";
import { MdOutlineFavorite } from "react-icons/md";
import { useOutletContext } from "react-router-dom";

const AddToWishList = ({ product }) => {
  const { wishlist, setWishlist } = useOutletContext();
  const isFavoriteIndex = wishlist.findIndex((item) => item.id === product.id);
  const isFavorite = wishlist[isFavoriteIndex]?.isFavorite;

  const handleFavoriteBtn = (e) => {
    e.preventDefault();

    const favoriteExistsIndex = wishlist.findIndex((item) => item.id === product.id);
    console.log(favoriteExistsIndex);

    if (favoriteExistsIndex != -1) {
      setWishlist(wishlist.filter((item) => item.id != product.id));
    } else {
      setWishlist([...wishlist, product]);
      setWishlist((prevProducts) =>
        prevProducts.map((item) =>
          item.id === product.id ? { ...item, isFavorite: !item.isFavorite } : item
        )
      );
    }
  };

  return (
    <button
      onClick={handleFavoriteBtn}
      className="text-4xl ml-auto p-2 hover:cursor-pointer rounded-2xl hover:bg-red-200 active:transform scale-1.05"
    >
      {isFavorite ? <MdOutlineFavorite color="#FF6B6B" /> : <GoHeart />}
    </button>
  );
};

export default AddToWishList;
