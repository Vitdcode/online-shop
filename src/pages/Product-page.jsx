import { Link, useLocation } from "react-router-dom";

export default function ProductPage() {
  const location = useLocation();
  const product = location.state;
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={product.imageUrl} alt="Product Image" className="!h-[700px] !w-[700px]" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <h3 className="text-2xl font-bold  w-full text-left">
        <span className="text-3xl ">⭐</span> {product.rating}
      </h3>
      <Link to="/">Go back</Link>
    </div>
  );
}
