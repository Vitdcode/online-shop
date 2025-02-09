import { useState } from "react";
import FetchItem from "./fetch-components/FetchItem";

function App() {
  const [products, setProducts] = useState([]);
  const category = "electronics";

  return (
    <div className="h-screen flex">
      <div className="flex flex-col justify-start border-r-2 border-gray-200 w-[600px]">
        <h2 className="m-10">Category</h2>
        <h2 className="m-10">Electronics</h2>
      </div>
      <div className="flex items-center">
        <FetchItem category={category} products={products} setProducts={setProducts} />
      </div>
    </div>
  );
}

export default App;
