import { createContext, useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaCartArrowDown, FaLaptop, FaTshirt } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { GiDoorRingHandle, GiGemChain, GiLargeDress } from "react-icons/gi";
import logo from "./images/logo.png";
import logoText from "./images/logo-text.png";
import { ThemeContext } from "../ThemeProvider";

function App() {
  const [products, setProducts] = useState([]);
  const categories = ["electronics", "jewelery", `men's clothing`, `women's clothing`];
  const [cartCount, setCartcount] = useState(0);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const categoriesIcons = {
    electronics: <FaLaptop />,
    jewelery: <GiDoorRingHandle />,
    "men's clothing": <FaTshirt />,
    "women's clothing": <GiLargeDress />,
  };

  return (
    <div className="flex relative" style={{ backgroundColor: theme === "light" ? "#fff" : "#333" }}>
      <div
        className="flex flex-col
      absolute top-10 right-20 scale-200 items-center  p-2 rounded-2xl"
        style={{
          backgroundColor: theme === "light" ? "rgb(245, 245, 244)" : "rgb(27, 52, 82)",
          color: theme === "light" ? "gray" : "rgb(245, 245, 244)",
        }}
      >
        <h3>{theme} mode</h3>
        <input type="checkbox" onClick={toggleTheme} />
      </div>

      <div className=" sticky top-0 h-screen flex flex-col justify-between border-r-2 border-gray-200 w-[600px] gap-10 bg-stone-100">
        <div className=" flex flex-col gap-10">
          <div className="!w-full !h-[100px]  bg-lime-100 shadow-2xl  relative">
            <img src={logoText} alt="Logo Text" className="!w-[300px] ml-auto mr-auto z-10 " />
            <img
              src={logo}
              alt="Logo of the shop"
              className="!w-[110px] !h-[110px] ml-auto mr-auto absolute top-5 right-0 rotate-350 "
            />
          </div>
          <h2 className="m-10 text-gray-700 underline">Category</h2>

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
