import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Usestate_example from "./components/Usestate_example.jsx";
import UseReducerExample from "./components/UseReducer_example.jsx";
import UseContext_example from "./components/UseContext_example.jsx";
import UseMemo_example from "./components/UseMemo_example.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/usestate",
    element: <Usestate_example />,
  },
  {
    path: "/usereducer",
    element: <UseReducerExample />,
  },
  {
    path: "/usecontext",
    element: <UseContext_example />,
  },
  {
    path: "/usememo",
    element: <UseMemo_example />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
