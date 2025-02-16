import { useContext, useState } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import AddToCartButton from "../functional-components/Add-to-cart-button";
import ShippingInfo from "../functional-components/Shipping-info";
import StockInfo from "../functional-components/Stock-info";
import AddToWishList from "../functional-components/Add-to-wishlist";

export default function ProductPage() {
  const location = useLocation();
  const product = location.state;
  const [show, setShow] = useState(false);
  console.log(product);

  return (
    <div className="flex flex-col justify-center items-center gap-2 w-[60%] p-20">
      <img src={product.imageUrl} alt="Product Image" className="!h-[700px] !w-[650px] mb-10" />
      <div className="bg-gray-100 flex flex-col justify-center items-center gap-4 w-full p-4 rounded-2xl">
        <h1 className="text-2xl font-bold text-start w-full">{product.name}</h1>
        <h3 className="text-2xl font-bold  w-full text-left mb-3">
          <span className="text-3xl ">⭐</span> {product.rating} ({product.ratingCount} ratings)
        </h3>
        <h3 className="text-2xl text-start w-full font-bold">${product.price}</h3>
        <div className="flex items-center w-full gap-10 p-4 text-2xl ">
          <ShippingInfo isFreeShipping={product.freeShipping} />
          <span>•</span>
          <StockInfo isInstock={product.inStock} />
          <AddToWishList product={product} />
        </div>
      </div>
      <AddToCartButton product={product} />
      <CollapsableText show={show} setShow={setShow} description={product.description} />
      <Ratings product={product} />
    </div>
  );
}

const CollapsableText = ({ show, setShow, description }) => {
  return (
    <div className="flex flex-col items-start w-full">
      {/* Toggle Button */}
      <button
        className="my-3 text-xl p-3 rounded-xl transition-all duration-250 hover:bg-gray-100 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <motion.span
          className="inline-block mr-2"
          animate={{ rotate: show ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▶
        </motion.span>
        {show ? "Hide description" : "Show description"}
      </button>

      {/* Collapsible content */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: show ? "auto" : 0, opacity: show ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ overflow: "hidden" }}
      >
        <h3 className="p-4 text-xl description-text shadow rounded-xl">{description}</h3>
      </motion.div>
    </div>
  );
};

CollapsableText.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  description: PropTypes.string,
};

const Ratings = ({ product }) => {
  const ratings = [
    {
      id: 1,
      userName: "Alex Thompson",
      isPurchaseVerified: true,
      date: "January 15, 2025",
      helpful: 24,
      comment:
        "This item is really amazing, I use it everyday and it has made my life much easier. Do not hesitate to buy while it's cheap.",
      rating: 5,
    },
    {
      id: 2,
      userName: "Emily Carter",
      isPurchaseVerified: false,
      date: "February 3, 2025",
      helpful: 12,
      comment:
        "The product is good, but it took longer than expected to arrive. The quality is decent for the price.",
      rating: 4,
    },
    {
      id: 3,
      userName: "Jordan Lee",
      isPurchaseVerified: true,
      date: "March 10, 2025",
      helpful: 8,
      comment:
        "Absolutely love this! It exceeded my expectations. The customer service was also very helpful.",
      rating: 5,
    },
    {
      id: 4,
      userName: "Mia Rodriguez",
      isPurchaseVerified: true,
      date: "April 22, 2025",
      helpful: 5,
      comment:
        "I was a bit skeptical at first, but this product is worth every penny. Highly recommend it!",
      rating: 5,
    },
    {
      id: 5,
      userName: "Lucas Smith",
      isPurchaseVerified: false,
      date: "May 5, 2025",
      helpful: 3,
      comment:
        "It's okay, but I think it's a bit overpriced for what you get. It works, but I expected more.",
      rating: 3,
    },
    {
      id: 6,
      userName: "Sophia Kim",
      isPurchaseVerified: true,
      date: "June 18, 2025",
      helpful: 15,
      comment:
        "This is a game-changer! I can't believe I waited so long to buy it. The quality is top-notch.",
      rating: 5,
    },
  ];

  return (
    <div className=" w-full">
      <h1 className="text-2xl font-bold  mt-30">User Ratings</h1>
      <hr className="mb-10 mt-10" />
      <div className="flex flex-col gap-20">
        {ratings.map((rating) => (
          <div
            key={rating.id}
            className="flex items-center gap-5 user-review-wrapper  p-4 rounded-xl"
          >
            <div className="bg-gray-200 rounded-full w-15 h-15"></div>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold">{rating.userName}</span>
              <div>
                {/* rating + date wrapper*/}
                <span>{rating.rating} • </span>
                <span>{rating.date}</span>
              </div>
              <p className="text-xl">{rating.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Ratings.propTypes = {
  product: PropTypes.object,
};
