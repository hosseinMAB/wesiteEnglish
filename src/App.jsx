import React from "react";
import { Layout } from "./Components/Layout/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routesData from "./Components/Json/routes.json";
import { Content } from "./Components/Content/ContentContent/Content";

function createRoutes(data) {
  return data.routes.map((route) => {
    return {
      path: route.path,
      element: React.createElement(eval(route.element)),
      children: route.children
        ? createRoutes({ routes: route.children })
        : undefined,
    };
  });
}

const App = () => {
  const Rauting = createBrowserRouter(createRoutes(routesData));

  return <RouterProvider router={Rauting}></RouterProvider>;
};

export default App;
