import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivetRoute";
import DashBoard from "../LayOut/DashBoard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/AddItem/AddItem";
import AdminRoute from "./AdmimRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
    {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/" ,
            element: <Home></Home>
        } ,
        {
            path: "menu" ,
            element: <Menu></Menu>
        },
        {
            path: "/order/:category" ,
            element: <Order></Order>
        } ,
        {
            path: "/login",
            element:<Login></Login>
        } ,
        {
            path: "/signup" ,
            element: <SignUp></SignUp>
        } ,
        {
            path: "/secret",
            element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
    ]
    },
    {
        path: 'dashboard' ,
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute> ,
        children: [
            {
                path: 'mycart' , 
                element: <MyCart></MyCart>
            } ,
            {
                path: 'payment' ,
                element: <Payment></Payment>
            } ,

            // Admin route
            {
                path: 'allusers' ,
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            } ,
            {
                path: 'additem' ,
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            } ,
            {
                path: 'manageitem' ,
                element: <ManageItems></ManageItems>
            }
        ]
    }
  ]);

  export default router;