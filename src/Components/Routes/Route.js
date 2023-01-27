import { createBrowserRouter } from "react-router-dom";
import AddHome from "../../Dashboard/AddHome/AddHome";
import AllBooking from "../../Dashboard/AllBooking/AllBooking";
import AllUser from "../../Dashboard/AllUser/AllUser";
import BecomeAHost from "../../Dashboard/BecomeAHost/BecomeAHost";
import AllHome from "../../Dashboard/Dashboard/AllHome/AllHome";

import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import ManageHome from "../../Dashboard/ManageHome/ManageHome";
import MyBooking from "../../Dashboard/MyBooking/MyBooking";
import DashboardLayout from "../../layout/DashboardLayout";
import Screen from "../../layout/Screen";
import Chackout from "../Chackout/Chackout";
// import Breadcumbs from "../Chackout/Breadcumbs/Breadcumbs";
// import Chackout from "../Chackout/Chackout";
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
        path: "/all-home",
        element: <AllHome></AllHome>,
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
        element: (
          <PrivateRoute>
            {" "}
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-booking",
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/become-host",
        element: (
          <PrivateRoute>
            <BecomeAHost></BecomeAHost>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/alluser",
        element: <AllUser></AllUser>,
      },
      {
        path: "/dashboard/allbooking",
        element: <AllBooking></AllBooking>,
      },
      {
        path: "/dashboard/add-home",
        element: <AddHome></AddHome>,
      },

      {
        path: "/dashboard/manage-home",
        element: <ManageHome></ManageHome>,
      },
    ],
  },
]);
