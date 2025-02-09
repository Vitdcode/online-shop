import { useEffect, useState } from "react";

export default function FetchItemsByCategory({ category, products, setProducts }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`, { mode: "cors" })
      .then((response) => response.json())
      .then((products) => {
        console.log(products);
        setProducts(products);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1>...Loading Page</h1>;
  if (error) return <h1>The Page encountered an error, please try again later</h1>;

  return (
    products && (
      <>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
          </div>
        ))}
      </>
    )
  );
}
