import HeroSection from "../pages/home/home";
import Navbar from "../components/navbar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
