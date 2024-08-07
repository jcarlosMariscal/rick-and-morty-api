import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { Home } from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Character } from "./components/character/Character";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "character/:id",
    element: <Character></Character>,
  },
  {
    path: "favorites",
    element: <Character></Character>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
