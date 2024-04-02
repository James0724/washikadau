import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "normalize.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ClientsAlbumList from "./pages/ClientsAlbumList";
import ClientPasswordProtectedComponent from "./pages/ClientPasswordProtectedComponent";
import Contact from "./pages/Contact";
import ProtectedRoute from "./pages/ProtectedRoutes";
import AuthProtectedRoute from "./pages/AuthProtectedRoute";
import Login from "./pages/Auth/login";
import AdminDashboard from "./pages/AdminDashboard";
import ScrollToTop from "./utils/ScrollToTop";
import Profile from "./pages/Profile";
//import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
    errorElement: "",
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        index: true,
        path: "/about",
        element: <About />,
      },
      {
        index: true,
        path: "/clients-albums",
        element: <ClientsAlbumList />,
      },
      {
        index: true,
        path: "/contact",
        element: <Contact />,
      },
      {
        index: true,
        path: "/portfolio",
        element: <Profile />,
      },
      {
        index: true,
        path: "/admin_dashboard",
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },

      {
        path: "/clients-albums/:client",
        element: <ClientPasswordProtectedComponent />,
      },
      {
        path: "/login",
        element: (
          <AuthProtectedRoute>
            <Login />
          </AuthProtectedRoute>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
