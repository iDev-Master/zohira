import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Layout from "./pages/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Courses from "./pages/Courses/Courses";


const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "Courses",
          element: <Courses />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;