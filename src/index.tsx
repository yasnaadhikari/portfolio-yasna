import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const container = document.getElementById("root") as HTMLElement;
const rootContainer = ReactDOM.createRoot(container);

rootContainer.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
