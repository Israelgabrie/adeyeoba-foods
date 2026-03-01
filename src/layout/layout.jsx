import HeroSection from "../pages/home/home";
import Navbar from "../components/navbar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}
