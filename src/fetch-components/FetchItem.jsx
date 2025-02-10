import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function FetchItemsByCategory({ category, setCategory, products, setProducts }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    if (category === "default") {
      setCategory("electronics");
      return;
    }
    fetch(`https://fakestoreapi.com/products/category/${category}`, { mode: "cors" })
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        console.log(products);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) return <h1>...Loading Page</h1>;
  if (error) return <h1>The Page encountered an error, please try again later</h1>;

  return (
    products && (
      <>
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[200px] flex flex-col justify-center shadow rounded-xl p-5 bg-gray-50 hover:shadow-xl hover:translate-y-2 hover:cursor-pointer transition duration-200"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <img src={product.image} alt={product.title} className="mx-auto mb-5" />
            <h2 className="overflow-hidden text-ellipsis whitespace-nowrap mb-2">
              {product.title}
            </h2>
            <div className="flex justify-between  rounded-xl p-2">
              <h3>{product.price}$</h3>
              <h3>⭐{product.rating.rate}</h3>
            </div>
            {hoveredProduct === product.id && <div className="title-fade-in">{product.title}</div>}
          </div>
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
