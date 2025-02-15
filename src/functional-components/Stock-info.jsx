import { span } from "framer-motion/client";

const StockInfo = ({ isInstock }) => {
  return (
    <div>
      {isInstock === 0 ? (
        <span className="text-red-300">Out of stock</span>
      ) : isInstock >= 5 ? (
        <span className="text-teal-300">In stock</span>
      ) : (
        <span className="text-red-300">Only {isInstock} left in stock</span>
      )}
    </div>
  );
};

export default StockInfo;
