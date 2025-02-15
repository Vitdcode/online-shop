import { LiaShippingFastSolid } from "react-icons/lia";

const ShippingInfo = ({ isFreeShipping }) => {
  return (
    <div>
      {isFreeShipping ? (
        <span className="flex gap-5 items-center text-teal-300">
          {<LiaShippingFastSolid className="text-3xl text-black" />} Free shipping
        </span>
      ) : (
        <span className="flex gap-5 items-center">
          {" "}
          {<LiaShippingFastSolid className="text-4xl" />} Shipping: $4.95
        </span>
      )}
    </div>
  );
};

export default ShippingInfo;
