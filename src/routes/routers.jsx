import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Registration from "../pages/Registration";
import PrivateRoute from "./pravite/PrivateRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch("http://localhost:3000/shoes")

        },
        {
            path:"/about",
            element:<About></About>

        },
        {
            path:"/login",
            element:<Login></Login>

        },
        {
            path:"/register",
            element:<Registration></Registration>

        },
      ],
    },
    {
        path:"dashboard",
        element:<DashboardLayout></DashboardLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"",
                element:<PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>
            }
        ]
    },
  ]);