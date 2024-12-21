import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";
import ScrollToTop from "./scrollToTop.jsx";
import { CartProvider } from "./components/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </CartProvider>
  </React.StrictMode>
);
