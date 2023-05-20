import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Collection from "../Pages/Collection/Collection";
import PrivetRoute from "./PrivetRoute";
import AddToys from "../Pages/AddToys/AddToys";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'collection',
                element: <PrivetRoute><Collection /></PrivetRoute>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'add-toy',
                element: <AddToys />
            }
        ]
    }
])

export default router;