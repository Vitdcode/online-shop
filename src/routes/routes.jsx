import App from "../App";
import ErrorPage from "../routing-components/ErrorPage";
import ProductPage from "../routing-components/Product-page";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "product-page",
    element: <ProductPage />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
