import { div } from "framer-motion/client";
import { useOutletContext } from "react-router-dom";
import AddToCartButton from "../functional-components/Add-to-cart-button";
import { MdDeleteOutline } from "react-icons/md";

const Wishlist = () => {
  const { wishlist, setWishlist } = useOutletContext();

  const handleDelete = (id) => {
    setWishlist(wishlist.filter((item) => item.id != id));
  };

  return (
    <div className="w-[70%] flex flex-col gap-5 p-20">
      {wishlist.map((item) => (
        <div
          key={item.id}
          className="flex relative p-10 flex-col gap-5 items-center justify-center border-2 border-gray-200
                     rounded-2xl "
        >
          <button
            onClick={() => handleDelete(item.id)}
            className="absolute top-5 right-5 text-5xl p-2 hover:bg-gray-100 rounded-2xl hover:cursor-pointer"
          >
            <MdDeleteOutline />
          </button>
          <img src={item.image} alt="Image of the Product" className="!h-[200px] !w-[200px]" />
          <div className="flex flex-col gap-5 text-2xl font-bold  p-4 rounded-2xl">
            <span>{item.title}</span>
            <span>${item.price}</span>
            {item.inStock >= 1 ? (
              <span className="w-fit p-2 rounded-2xl bg-lime-100"> In stock: {item.inStock}</span>
            ) : (
              <span className="w-fit p-2 rounded-2xl bg-red-100">Out of stock</span>
            )}
          </div>

          <div className="w-[60%]">
            <AddToCartButton product={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
