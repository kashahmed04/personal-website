import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

const redirect = sessionStorage.getItem("redirect");

if (redirect) {
  sessionStorage.removeItem("redirect");

  const base = "/personal-website";

  const route = redirect.startsWith(base)
    ? redirect.slice(base.length)
    : redirect;

  window.history.replaceState(null, "", base + (route || "/"));
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/personal-website">
      <App />
    </BrowserRouter>
  </StrictMode>
);