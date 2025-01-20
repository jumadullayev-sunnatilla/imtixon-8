import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../pages/layout/Layout";
import Cart from "../pages/cart/Cart";
import Detail from "../pages/detail/Detail";
import Clothes from "../pages/clothes/Clothes";
const Routers = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/clothes",
              element: <Clothes />,
            },
            {
              path: "/cart",
              element: <Cart />,
            },

            {
              path: "*",
              element: <div>404</div>,
            },
            {
              path: "/product/:id",
              element: <Detail />,
            },
          ],
        },
      ])}
    </>
  );
};

export default Routers;
