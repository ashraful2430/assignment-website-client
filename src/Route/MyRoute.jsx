import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout"
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Components/Layout/Home/Home";
import Login from "../Pages/Login"
import Register from "../Pages/Register";

import MyAssignments from "../Pages/MyAssignments";

import PrivateRoute from "./PrivateRoute";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import AllAssignments from "../Pages/AllAssignments/AllAssignments";
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";
import AssignmentDetails from "../Pages/AssignmentsDetails/AssignmentDetails";
import SubmitedAssignments from "../Pages/Submitted/SubmitedAssignments";
import MarkSubmit from "../Pages/Submitted/MarkSubmit";


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
                path: "/updateAssignments/:id",
                element: <PrivateRoute><UpdateAssignment /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignments/${params.id}`)
            },
            {
                path: "/assignmentDetails/:id",
                element: <PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/assignments/${params.id}`)
            },
            {
                path: "/markAssignment/:id",
                element: <MarkSubmit></MarkSubmit>,
                loader: ({ params }) => fetch(`http://localhost:5000/submitted/${params.id}`)
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
    },
    {
        path: "/submittedAssignments",
        element: <PrivateRoute><SubmitedAssignments></SubmitedAssignments></PrivateRoute>,

    },
])





export default router;