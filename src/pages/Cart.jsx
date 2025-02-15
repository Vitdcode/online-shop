import { div, h1 } from "framer-motion/client";
import { Link, useLocation } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  const location = useLocation();
  const cart = location.state;
  console.log(cart);

  return (
    <div className="flex flex-col gap-10">
      {cart.map((item) => (
        <div
          key={item.id}
          className="cart-item-wrapper  gap-15 border-2 border-gray-100 rounded-xl p-2 h-full"
        >
          <img src={item.imageUrl} alt="Image of the product" />
          <div className="flex flex-col font-bold gap-2 text-2xl">
            <h1>{item.title}</h1>
            <span>${item.price}</span>
            <div className="flex gap-2">
              <button>-</button>
              <span className="p-2 bg-gray-100 rounded-lg">{item.quantity}</span>
              <button>+</button>
            </div>
          </div>
          <div className="flex items-start gap-4 min-h-[100px]">
            <button className="text-4xl">
              <MdDeleteOutline />
            </button>
            <button className="text-4xl">{<GoHeart />}</button>
          </div>
        </div>
      ))}
      <Link to={"/"} className="category-button !w-[200px]">
        Go Back
      </Link>
    </div>
  );
};

export default Cart;
