import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const viewportHeight =
  window.innerHeight || document.documentElement.clientHeight;
const toolbarHeight = window.outerHeight - window.innerHeight;

const usableHeight = viewportHeight - toolbarHeight;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App usableHeight={usableHeight} />
  // </React.StrictMode>
);
