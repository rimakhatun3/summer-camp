import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";

import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Instractors from "../pages/Instructors/Instractors";
import AllClasses from "../pages/AllClasses/AllClasses";
import Dashboard from "../Layout/Dashboard";
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses";
import MyEnrollClasses from "../pages/Dashboard/MyEnrollClasses";
import Payment from "../pages/Dashboard/Payment";
import ManageUser from "../pages/Dashboard/ManageUser";
import ManageClasses from "../pages/Dashboard/ManageClasses";
import AddAClasses from "../pages/Dashboard/AddAClasses";
import MyClasses from "../pages/Dashboard/MyClasses";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/instructor',
                element:<Instractors></Instractors>
            },
            {
                path:'/allclasses',
                element:<AllClasses></AllClasses>
            },
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/signup',
        element:<SignUp></SignUp>
    },
    {
        path:'dashboard',
element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
children:[
    {
        path:'myselectedclasses',
        element:<MySelectedClasses></MySelectedClasses>
    },
    {
        path:'myenrollclasses',
        element:<MyEnrollClasses></MyEnrollClasses>
    },
    {
        path:'mypayment',
        element:<Payment></Payment>
    },
    {
        path:'manageuser',
        element:<ManageUser></ManageUser>
    },
    {
        path:'manageclasses',
        element:<ManageClasses></ManageClasses>
    },
    {
        path:'addclass',
        element:<AddAClasses></AddAClasses>
    },
    {
        path:'myclass',
        element:<MyClasses></MyClasses>
    },
]
    }
])

export default router;