import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/scss/mystyle.scss";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./pages/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);

reportWebVitals();
