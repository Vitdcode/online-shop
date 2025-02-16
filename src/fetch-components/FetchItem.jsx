import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import AddToCartButton from "../functional-components/Add-to-cart-button";
import StockInfo from "../functional-components/Stock-info";
import ShippingInfo from "../functional-components/Shipping-info";
import AddToWishList from "../functional-components/Add-to-wishlist";
import { div } from "framer-motion/client";

export default function FetchItemsByCategory() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const randomBoolean = () => Math.random() < 0.5;

  const randomStock = () => Math.floor(Math.random() * 11);

  const location = useLocation();
  const cat = location.state;
  const { products, setProducts } = useOutletContext();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${cat}`, { mode: "cors" })
      .then((response) => response.json())
      .then((products) => {
        setProducts(
          products.map((product) => ({
            ...product,
            freeShipping: randomBoolean(),
            inStock: randomStock(),
            isFavorite: false,
          }))
        );
        console.log("Fetched products:", products);
      })
      .catch((error) => {
        setError(error);
        console.error("Fetch error:", error);
      })
      .finally(() => setLoading(false));
  }, [cat]);

  if (loading) return <h1>...Loading Page</h1>;
  if (error) return <h1>The Page encountered an error, please try again later</h1>;

  return (
    products && (
      <div className="flex flex-col w-full ml-25 gap-15 p-30">
        <h1 className="capitalize text-3xl font-bold">{cat}</h1>
        <hr className="opacity-50 border-gray-400" />
        {products.map((product) => (
          <Link
            to={`/product-page/${product.id}`}
            key={product.id}
            state={{
              title: product.title,
              rating: product.rating.rate,
              image: product.image,
              price: product.price,
              ratingCount: product.rating.count,
              description: product.description,
              id: product.id,
              freeShipping: product.freeShipping,
              inStock: product.inStock,
              isFavorite: product.isFavorite,
            }}
            className="w-[1100px] ml-auto mr-auto"
          >
            <div
              className="flex justify-start items-center  gap-10 shadow rounded-xl p-5 
              bg-gray-50 hover:shadow-xl hover:cursor-pointer transition-transform duration-200 hover:scale-101"
            >
              <img src={product.image} alt={product.title} className="" />
              <div className="flex flex-col  gap-3 rounded-xl font-bold  ">
                <h2>{product.title}</h2>

                <h3>{product.price}$</h3>
                <h3 className="flex items-center gap-1">
                  <FaStar color="rgb(222, 121, 33)" />
                  {product.rating.rate}
                </h3>
                <div className="flex items-center gap-5 p-2  rounded-lg w-fit">
                  <StockInfo isInstock={product.inStock} />
                  <span>•</span>
                  <ShippingInfo isFreeShipping={product.freeShipping} />
                </div>

                <div>
                  <AddToCartButton
                    product={product}
                    idNameStock={"add-to-cart-all-products-in-stock"}
                    idNameNoStock={"add-to-cart-all-products-no-stock"}
                  />
                </div>
              </div>
              <AddToWishList product={product} />
            </div>
          </Link>
        ))}
      </div>
    )
  );
}

FetchItemsByCategory.propTypes = {
  category: PropTypes.string,
  setCategory: PropTypes.func,
  products: PropTypes.array,
  setProducts: PropTypes.func,
};
