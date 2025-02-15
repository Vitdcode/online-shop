import { div, h1 } from "framer-motion/client";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  const { cart, setCart } = useOutletContext();
  /*   const location = useLocation();
  const cart = location.state; */
  console.log(cart);

  const handleQuantityIncrease = (id) => {
    console.log(id);
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const handleQuantityDecrease = (id, quantity) => {
    if (quantity <= 0) return;
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
    );
  };

  return (
    <div className="flex flex-col gap-10">
      {cart.map((item) => (
        <div
          key={item.id}
          className="cart-item-wrapper  gap-15 border-2 border-gray-100 rounded-xl p-2 max-w-[80%]"
        >
          <img src={item.imageUrl} alt="Image of the product" />
          <div className="flex flex-col font-bold gap-2 text-2xl">
            <h1>{item.title}</h1>
            <span>${item.price}</span>
            <div className="flex gap-2">
              <button onClick={() => handleQuantityDecrease(item.id, item.quantity)}>-</button>
              <span className="p-2 bg-gray-100 rounded-lg">{item.quantity}</span>
              <button onClick={() => handleQuantityIncrease(item.id)}>+</button>
            </div>
          </div>
          <div className="flex items-start gap-4 min-h-[120px]">
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
