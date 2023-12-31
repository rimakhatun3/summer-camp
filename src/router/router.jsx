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
import FeedBack from "../pages/Dashboard/FeedBack";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import Errorpage from "../shared/Errorpage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/instructor',
                element:<PrivateRoute><Instractors></Instractors></PrivateRoute>
            },
            {
                path:'/allclasses',
                element:<PrivateRoute><AllClasses></AllClasses></PrivateRoute>
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
        path:'mypayment/:id',
        element:<Payment></Payment>,
        loader:({params})=> fetch(`https://b7a12-server.vercel.app/allclasse/${params.id}`)
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
    {
        path:'feedback/:id',
        element:<FeedBack></FeedBack>,
        loader:({params})=>fetch(`https://b7a12-server.vercel.app/feedbackclass/${params.id}`)
        
    },
    {
        path:'paymenthistory',
        element:<PaymentHistory></PaymentHistory>
    },
]
    }
])

export default router;