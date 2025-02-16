import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
function App() {
  const [products, setProducts] = useState([]);
  const category = ["electronics", "jewelery", `men's clothing`, `women's clothing`];
  const [cartCount, setCartcount] = useState(0);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  return (
    <div className="h-screen flex">
      <div className="flex flex-col justify-start border-r-2 border-gray-200 w-[600px] gap-10">
        <h2 className="m-10">Category</h2>
        {category.map((cat, index) => (
          <Link to={`/category/${cat}`} key={index} state={cat} className="category-button">
            {cat}
          </Link>
        ))}
        <Link
          to={"/cart-page"}
          className="category-button flex justify-center items-center gap-3 mt-20"
        >
          <FaCartArrowDown /> Cart ({cartCount} items)
        </Link>

        <Link
          to={"/wishlist"}
          className="category-button flex justify-center items-center gap-3 mt-20"
        >
          {<MdFavorite />} Wishlist
        </Link>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-20 w-full">
        <Outlet
          context={{
            products,
            setProducts,
            cart,
            setCart,
            cartCount,
            setCartcount,
            wishlist,
            setWishlist,
          }}
        />
      </div>
    </div>
  );
}

export default App;
