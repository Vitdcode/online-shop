import { div, h1 } from "framer-motion/client";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  const { cart, setCart } = useOutletContext();
  console.log(cart);

  const handleQuantityIncrease = (id, stock, quantity) => {
    if (quantity >= stock) return;
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const handleQuantityDecrease = (id, quantity) => {
    if (quantity <= 1) return;
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
    );
  };

  return (
    <div className="flex flex-col items-center  gap-10 w-full">
      {cart.map((item) => (
        <div
          key={item.id}
          className="cart-item-wrapper gap-15 border-2 border-gray-100 rounded-xl p-2 w-[60%]"
        >
          <div className="flex flex-col gap-2 items-center text-lg">
            <img src={item.imageUrl} alt="Image of the product" />
            <span className="p-2 bg-lime-100 rounded-xl">In stock: {item.inStock}</span>
          </div>
          <div className="flex flex-col font-bold gap-4 text-2xl">
            <h1>{item.title}</h1>
            <span>${item.price}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleQuantityDecrease(item.id, item.quantity)}
                className="p-3 rounded-lg hover:bg-red-100 hover:cursor-pointer active:bg-red-200"
              >
                -
              </button>
              <span className="p-2 bg-gray-100 rounded-lg">{item.quantity}</span>
              <button
                onClick={() => handleQuantityIncrease(item.id, item.inStock, item.quantity)}
                className="p-2 rounded-lg hover:bg-teal-100 hover:cursor-pointer active:bg-teal-200"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-start gap-4 h-full mt-4 mr-4">
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
