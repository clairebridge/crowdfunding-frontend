import React from "react";
import ReactDOM from "react-dom/client";
import{ createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from"./pages/HomePage.jsx";
import ProjectPage from"./pages/ProjectPage.jsx";
import NavBar from"./components/NavBar.jsx";
import LoginPage from "./pages/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
      children: [
        {path: "/", element: <HomePage />},
        { path: "/login", element: <LoginPage /> },
        { path: "/project/:id", element: <ProjectPage /> },    
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Here we wrap our app in the router provider so they render */}
    <RouterProvider router={router} />  
  </React.StrictMode>
);