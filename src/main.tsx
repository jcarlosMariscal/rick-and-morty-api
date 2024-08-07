import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { CharactersPage } from "./pages/CharactersPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { FavoritesPage } from "./pages/FavoritesPage";
import { CharacterPage } from "./pages/CharacterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <CharactersPage></CharactersPage>,
      },
      {
        path: "character/:id",
        element: <CharacterPage></CharacterPage>,
      },
      {
        path: "favorites",
        element: <FavoritesPage></FavoritesPage>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
