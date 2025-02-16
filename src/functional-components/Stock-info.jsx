import { span } from "framer-motion/client";

const StockInfo = ({ isInstock }) => {
  return (
    <div>
      {isInstock === 0 ? (
        <span className="text-red-300">Out of stock</span>
      ) : isInstock >= 5 ? (
        <span style={{ color: "rgb(110, 198, 154)" }}> In stock</span>
      ) : (
        <span className="text-red-300">Only {isInstock} left in stock</span>
      )}
    </div>
  );
};

export default StockInfo;
