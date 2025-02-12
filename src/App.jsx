import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("default");

  return (
    <div className="h-screen flex">
      <div className="flex flex-col justify-start border-r-2 border-gray-200 w-[600px] gap-10">
        <h2 className="m-10">Category</h2>
        <button onClick={() => setCategory("electronics")}>Electronics</button>
        <button onClick={() => setCategory("jewelery")}>Jewelery</button>
        <button onClick={() => setCategory(`men's clothing`)}>{"Men's clothing"}</button>
        <button onClick={() => setCategory(`women's clothing`)}>{"women's clothing"}</button>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-20 w-full">
        <Outlet context={{ products, setProducts, category, setCategory }} />
      </div>
    </div>
  );
}

export default App;
