import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function ProductPage() {
  const location = useLocation();
  const product = location.state;
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center gap-2 w-[60%]">
      <img src={product.imageUrl} alt="Product Image" className="!h-[700px] !w-[650px]" />
      <h1 className="text-2xl font-bold text-start w-full">{product.name}</h1>
      <h3 className="text-2xl font-bold  w-full text-left mb-3">
        <span className="text-3xl ">⭐</span> {product.rating} ({product.ratingCount} ratings)
      </h3>
      <h3 className="text-2xl text-start w-full font-bold">${product.price}</h3>
      <CollapsableText show={show} setShow={setShow} description={product.description} />
      <Link to="/">Go back</Link>
    </div>
  );
}

const CollapsableText = ({ show, setShow, description }) => {
  return (
    <div className="flex flex-col items-start">
      {/* Toggle Button */}
      <button
        className="my-3 text-xl p-3 rounded-xl transition-all duration-250 hover:bg-gray-100 cursor-pointer flex items-center"
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
        <h3 className="p-4 text-xl">{description}</h3>
      </motion.div>
    </div>
  );
};

CollapsableText.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  description: PropTypes.string,
};
