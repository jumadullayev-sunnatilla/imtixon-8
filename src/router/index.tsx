import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Layout from "../pages/layout/Layout";
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
              path: "/about",
              element: <About />,
            },
            {
              path: "*",
              element: <div>404</div>,
            },
            {
              path: "/product/:id",
              element: <div>detail</div>,
            },
          ],
        },
      ])}
    </>
  );
};

export default Routers;
