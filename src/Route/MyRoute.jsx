import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout"
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Components/Layout/Home/Home";
import Assignments from "../Pages/Assignments";
import Login from "../Pages/Login"
import Register from "../Pages/Register";

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
                element: <Assignments></Assignments>
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