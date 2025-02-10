import { useEffect, useState } from "react";

export default function FetchItemsByCategory({ category, setCategory, products, setProducts }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category === "default") {
      setCategory("electronics");
      return;
    }
    fetch(`https://fakestoreapi.com/products/category/${category}`, { mode: "cors" })
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
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
          <div key={product.id} className="w-[200px] flex flex-col justify-center">
            <img src={product.image} alt={product.title} className="mx-auto " />
            <h2 className="overflow-hidden text-ellipsis whitespace-nowrap">{product.title}</h2>
          </div>
        ))}
      </>
    )
  );
}
