import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Hero from "./components/Pages/Hero";
import "./index.css";
import Login from "./components/Pages/Login";
import { useEffect } from "react";
import CreateTest from "./components/Pages/CreateTest";
import PendingTests from "./components/Pages/PendingTests";
import Labs from "./components/Pages/Labs";
import TestHistory from "./components/Pages/TestHistory";
import Notifications from "./components/Pages/Notifications";
import AddNew from "./components/Pages/AddNew";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Hero />
      },
      {
        path: "/testolustur",
        element: <CreateTest />
      },
      {
        path: "/bekleyentestler",
        element: <PendingTests />
      },
      {
        path: "/laboratuvarlar",
        element: <Labs />
      },
      {
        path: "/testgecmisi",
        element: <TestHistory />
      },
      {
        path: "/bildirimler",
        element: <Notifications />
      },
      {
        path: "/ekle",
        element: <AddNew />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);