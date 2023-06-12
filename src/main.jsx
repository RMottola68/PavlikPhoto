import * as React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import Services from "./routes/services";
import Gallery, { loader as servicesLoader } from "./routes/gallery";
import Contact from "./routes/Contact";
import Service from "./routes/Service"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/services",
        element: <Gallery />,
        loader: servicesLoader,
        
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "services/:service",
        element: <Service />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
