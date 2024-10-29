import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import InfoPage from "./components/pages/InfoPage";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import { ThemeProvider } from "./context/themeContext";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/info", element: <InfoPage /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> },
]);

// function handleRedirect() {
//   const urlParams = new URLSearchParams(window.location.search);
//   const redirect = urlParams.get("redirect");
//   if (redirect) {
//     setTimeout(() => {
//       window.history.replaceState({}, "", redirect);
//     }, 2000);
//   }
// }

// handleRedirect();

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
