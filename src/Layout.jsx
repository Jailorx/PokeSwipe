import React from "react";

import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gray-300 min-h-screen flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
