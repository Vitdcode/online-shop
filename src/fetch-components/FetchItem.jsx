import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation, useOutletContext } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function FetchItemsByCategory() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredProduct, setHoveredProduct] = useState(null);
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
      <>
        {products.map((product) => (
          <Link
            to={`/product-page/${product.id}`}
            key={product.id}
            state={{
              name: product.title,
              rating: product.rating.rate,
              imageUrl: product.image,
              price: product.price,
              ratingCount: product.rating.count,
              description: product.description,
              id: product.id,
              freeShipping: product.freeShipping,
              inStock: product.inStock,
            }}
          >
            <div
              className="w-[200px] flex flex-col justify-center shadow rounded-xl p-5 bg-gray-50 hover:shadow-xl hover:cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <img src={product.image} alt={product.title} className="mx-auto mb-5" />
              <h2 className="overflow-hidden text-ellipsis whitespace-nowrap mb-2">
                {product.title}
              </h2>

              {/* Price and Rating */}
              <div className="flex justify-between rounded-xl p-2">
                <h3>{product.price}$</h3>
                <h3>⭐{product.rating.rate}</h3>
              </div>
              <AnimatePresence>
                {hoveredProduct === product.id && (
                  <motion.div
                    initial={{ opacity: 0, maxHeight: "0" }}
                    animate={{ opacity: 1, maxHeight: "250px" }}
                    exit={{ opacity: 0, maxHeight: "0" }}
                    transition={{ duration: 0.5 }}
                    className="mt-2 text-gray-600"
                    style={{ overflow: "hidden" }}
                  >
                    {product.title}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Link>
        ))}
      </>
    )
  );
}

FetchItemsByCategory.propTypes = {
  category: PropTypes.string,
  setCategory: PropTypes.func,
  products: PropTypes.array,
  setProducts: PropTypes.func,
};
