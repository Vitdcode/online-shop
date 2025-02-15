import { h1 } from "framer-motion/client";
import { Link, useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const cart = location.state;
  console.log(cart);

  return (
    <>
      <h1>TEST</h1>
      <Link to={"/"}>Go Back</Link>
    </>
  );
};

export default Cart;
