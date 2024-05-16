import React from "react";

import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gray-400 min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
