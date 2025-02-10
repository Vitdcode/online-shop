import { useState } from "react";
import FetchItemsByCategory from "./fetch-components/FetchItem";

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("default");

  return (
    <div className="h-screen flex">
      <div className="flex flex-col justify-start border-r-2 border-gray-200 w-[600px]">
        <h2 className="m-10">Category</h2>
        <button onClick={() => setCategory("electronics")}>Electronics</button>
        <button onClick={() => setCategory("jewelery")}>Jewelery</button>
        <button onClick={() => setCategory(`men's clothing`)}>{"Men's clothing"}</button>
        <button onClick={() => setCategory(`women's clothing`)}>{"women's clothing"}</button>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-20 w-full">
        <FetchItemsByCategory
          category={category}
          setCategory={setCategory}
          products={products}
          setProducts={setProducts}
        />
      </div>
    </div>
  );
}

export default App;
