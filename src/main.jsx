import React from "react";
import ReactDOM from "react-dom/client";
import{ createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from"./pages/HomePage.jsx";
import ProjectPage from"./pages/ProjectPage.jsx";
import NavBar from"./components/NavBar.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CreateProject from "./pages/CreateProject.jsx"
import CreatePledge from "./pages/CreatePledge.jsx"
import { AuthProvider } from "./components/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
      children: [
        {path: "/", element: <HomePage />},
        { path: "/login", element: <LoginPage /> },
        { path: "/project/:id", element: <ProjectPage /> },
        { path: "/create-project", element: <CreateProject /> }, 
        { path: "/create-pledge", element: <CreatePledge /> },      
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />  
    </AuthProvider>
  </React.StrictMode>
);