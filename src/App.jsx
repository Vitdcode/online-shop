import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("default");
  const [cartCount, setCartcount] = useState(0);
  const [cart, setCart] = useState([{ count: 0 }]);

  return (
    <div className="h-screen flex">
      <div className="flex flex-col justify-start border-r-2 border-gray-200 w-[600px] gap-10">
        <h2 className="m-10">Category</h2>
        <button className="category-button" onClick={() => setCategory("electronics")}>
          Electronics
        </button>
        <button className="category-button" onClick={() => setCategory("jewelery")}>
          Jewelery
        </button>
        <button className="category-button" onClick={() => setCategory(`men's clothing`)}>
          {"Men's clothing"}
        </button>
        <button className="category-button" onClick={() => setCategory(`women's clothing`)}>
          {"women's clothing"}
        </button>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-20 w-full">
        <Outlet
          context={{
            products,
            setProducts,
            category,
            setCategory,
            cart,
            setCart,
            cartCount,
            setCartcount,
          }}
        />
      </div>
    </div>
  );
}

export default App;
