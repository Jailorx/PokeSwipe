import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Game from "./components/Game/Game.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

import { LikeContextProvider } from "./context/LikeContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="game" element={<Game />} />
      <Route path="favorites" element={<Favorites />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LikeContextProvider>
      <div className="font-custom">
        <RouterProvider router={router} />
      </div>
    </LikeContextProvider>
  </React.StrictMode>
);
