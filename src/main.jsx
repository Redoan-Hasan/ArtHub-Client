import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import Root from "./Components/Root";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AddCraft from "./Components/AddCraft";
import AuthProvider from "./Components/AuthProvider";
import AllCraftList from "./Components/AllCraftList";
import ViewDetails from "./Components/ViewDetails";
import MyCraftList from "./Components/MyCraftList";
import UpdateExistingCraft from "./Components/UpdateExistingCraft";
import PrivateRoute from "./Components/PrivateRoute";
import MatchingSubcategory from "./Components/MatchingSubcategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://art-hub-server.vercel.app/craftsCards"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoute>
            <AddCraft />
          </PrivateRoute>
        ),
      },
      {
        path: "/allCraftList",
        element: <AllCraftList />,
        loader: () => fetch("https://art-hub-server.vercel.app/craftsCards"),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://art-hub-server.vercel.app/viewDetails/${params.id}`),
      },
      {
        path: "/myCraftList/:email",
        element: (
          <PrivateRoute>
            <MyCraftList />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://art-hub-server.vercel.app/myCraftList/${params.email}`
          ),
      },
      {
        path: "/updateExistingCraft/:id",
        element: (
          <PrivateRoute>
            <UpdateExistingCraft />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://art-hub-server.vercel.app/updateExistingCraft/${params.id}`
          ),
      },
      {
        path: "/matchingSubCategory/:subcategory",
        element: <MatchingSubcategory />,
        loader: ({ params }) =>
          fetch(
            `https://art-hub-server.vercel.app/matchingSubCategory/${params.subcategory}`
          ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
