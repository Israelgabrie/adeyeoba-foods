import { useEffect } from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Layout from "./layout/layout";
import HeroSection from "./pages/home/home";
import LeavesImage from "./assets/leaves.png";

import toast, { Toaster } from "react-hot-toast";
import { toastConfig } from "./config/toastConfig.jsx"; // your existing toast config
import ShopPage from "./pages/shop/shop.jsx";
import MealsPage from "./pages/meals/meals.jsx";
import AboutPage from "./pages/about/about.jsx";
import ContactPage from "./pages/contact/contact.jsx";
import OrderPage from "./pages/order/order.jsx";

// Define your routes as an array of objects
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HeroSection />,
      },
      {
        path: "/home",
        element: <HeroSection />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/meals",
        element: <MealsPage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/order",
        element: <OrderPage />,
      },
    ],
  },
];

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  useEffect(() => {
    // Change page title
    document.title = "ADEYEOBA FOODS";

    // Change favicon
    const link =
      document.querySelector("link[rel~='icon']") ||
      document.createElement("link");

    link.rel = "icon";
    link.type = "image/png";
    link.href = LeavesImage;

    document.head.appendChild(link);
  }, []);

  return (
    <BrowserRouter>
      {/* React Hot Toast provider */}
      <Toaster
        position="top-left"
        reverseOrder={false}
        toastOptions={toastConfig}
      />

      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
