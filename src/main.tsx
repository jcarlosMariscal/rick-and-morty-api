import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { Home } from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="container">
      <Home />
    </div>
  </React.StrictMode>
);
