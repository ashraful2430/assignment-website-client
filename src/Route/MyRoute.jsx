import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout"
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Components/Layout/Home/Home";
import Login from "../Pages/Login"
import Register from "../Pages/Register";

import MyAssignments from "../Pages/MyAssignments";
import SubmitedAssignments from "../Pages/SubmitedAssignments";
import PrivateRoute from "./PrivateRoute";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import AllAssignments from "../Pages/AllAssignments/AllAssignments";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/assignments",
                element: <AllAssignments></AllAssignments>,
                loader: () => fetch('http://localhost:5000/assignments')
            },
            {
                path: "/createAssignments",
                element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
            },
            {
                path: "/myAssignments",
                element: <PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>
            },
            {
                path: "/submittedAssignments",
                element: <SubmitedAssignments></SubmitedAssignments>
            }
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
])





export default router;