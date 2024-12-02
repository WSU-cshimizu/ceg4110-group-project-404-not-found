import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes";
import "./index.css";

// The entry point of the application. This file renders the App component into the DOM.
// React.StrictMode is used to highlight potential issues in the application during development.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
