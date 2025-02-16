import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaCartArrowDown, FaLaptop, FaTshirt } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { GiDoorRingHandle, GiGemChain, GiLargeDress } from "react-icons/gi";
function App() {
  const [products, setProducts] = useState([]);
  const categories = ["electronics", "jewelery", `men's clothing`, `women's clothing`];
  const [cartCount, setCartcount] = useState(0);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const categoriesIcons = {
    electronics: <FaLaptop />,
    jewelery: <GiDoorRingHandle />,
    "men's clothing": <FaTshirt />,
    "women's clothing": <GiLargeDress />,
  };

  return (
    <div className="flex">
      <div className=" sticky top-0 h-screen flex flex-col justify-between border-r-2 border-gray-200 w-[600px] gap-10 bg-slate-600">
        <div className=" flex flex-col gap-10">
          <h2 className="m-10 text-white">Category</h2>
          {categories.map((cat, index) => (
            <Link to={`/category/${cat}`} key={index} state={cat} className="category-button">
              <>
                {" "}
                {categoriesIcons[cat]} {cat}
              </>
            </Link>
          ))}
        </div>
        <div>
          <Link
            to={"/cart-page"}
            className="category-button flex justify-center items-center gap-3 "
          >
            <FaCartArrowDown /> Cart ({cartCount} items)
          </Link>

          <Link
            to={"/wishlist"}
            className="category-button flex justify-center items-center gap-3 mt-10 mb-10"
          >
            {<MdFavorite />} Wishlist ({wishlist.length} items)
          </Link>
        </div>
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
