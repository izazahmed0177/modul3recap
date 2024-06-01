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
import ProductsDetels from "../pages/ProductsDetels";
import AllProducts from "../pages/AllProducts";
import AddProducts from "../pages/AddProducts";
import EditProducts from "../pages/EditProducts";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch("http://localhost:5000/shoes")

        },
        {
            path:"/products/:id",
            element:<ProductsDetels></ProductsDetels>,
            loader:({params})=>fetch(`http://localhost:5000/shoes/${params.id}`)

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
                element:(
                <PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>
                ),
            },
            {
                path:"dashboard/all-products",
                element:(
                <PrivateRoute>
                    <AllProducts></AllProducts>
                </PrivateRoute>
                ),
            },
            {
                path:"dashboard/add-products",
                element:(
                <PrivateRoute>
                    <AddProducts></AddProducts>
                </PrivateRoute>
                ),
            },
            {
                path:"dashboard/all-products/edit/:id",
                element:(
                <PrivateRoute>
                    <EditProducts></EditProducts>
                </PrivateRoute>
                ),
                loader:({params})=>fetch(`http://localhost:5000/shoes/${params.id}`)
            },
        ]
    },
  ]);


//   http://localhost:5173/dashboard/dashboard/all-products/edit/1