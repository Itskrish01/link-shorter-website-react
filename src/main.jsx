import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import LinkProvider from "./LinkContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LinkProvider>
    <App />
  </LinkProvider>
);
