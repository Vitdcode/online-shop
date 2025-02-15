import App from "../App";
import FetchItemsByCategory from "../fetch-components/FetchItem";
import ErrorPage from "../pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import ProductPage from "../pages/Product-page";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <FetchItemsByCategory />,
      },
      {
        path: "product-page/:id",
        element: <ProductPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "cart-page",
        element: <Cart />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
