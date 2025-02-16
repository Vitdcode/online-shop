import { useState } from "react";
import { GoHeart } from "react-icons/go";
import { MdOutlineFavorite } from "react-icons/md";
import { useOutletContext } from "react-router-dom";

const AddToWishList = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { wishlist, setWishlist } = useOutletContext();

  const handleFavoriteBtn = () => {
    setIsFavorite(!isFavorite);
    setWishlist([...wishlist, product]);
  };

  return (
    <button
      onClick={() => handleFavoriteBtn()}
      className="text-4xl ml-auto p-2 hover:cursor-pointer rounded-2xl hover:bg-red-200"
    >
      {isFavorite ? <MdOutlineFavorite color="#FF6B6B" /> : <GoHeart />}
    </button>
  );
};

export default AddToWishList;
