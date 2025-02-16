import App from "../App";
import FetchItemsByCategory from "../fetch-components/FetchItem";
import ErrorPage from "../pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import ProductPage from "../pages/Product-page";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "category/:id",
        element: <FetchItemsByCategory />,
      },
      {
        path: "product-page/:id",
        element: <ProductPage />,
      },
      {
        path: "cart-page",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

export default router;
