// App.jsx
import { useEffect } from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import HeroSection from "./pages/home/home";
import LeavesImage from "./assets/leaves.png";

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
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;