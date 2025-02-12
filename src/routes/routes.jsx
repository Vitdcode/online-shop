import App from "../App";
import FetchItemsByCategory from "../fetch-components/FetchItem";
import ErrorPage from "../pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import ProductPage from "../pages/Product-page";

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
        path: "product-page",
        element: <ProductPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
