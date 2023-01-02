import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import DashboardLayout from "../../layout/DashboardLayout";
import Screen from "../../layout/Screen";
import Chackout from "../Chackout/Chackout";
import Home from "../Home/Home";
import Details from "../HomeCollection/Details";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import SearchResult from "../SearchForm/SearchResult";
import Terms from "../Terms/Terms";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Screen></Screen>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "details",
        element: <Details></Details>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
      {
        path: "searchresult",
        element: <SearchResult></SearchResult>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
      {
        path: "chackout",
        element: (
          <PrivateRoute>
            <Chackout></Chackout>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <DashboardLayout></DashboardLayout>{" "}
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
