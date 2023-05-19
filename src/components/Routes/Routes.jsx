import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Sub from "../Layouts/Sub";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Collection from "../Pages/Collection/Collection";
import PrivetRoute from "./PrivetRoute";

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
            }
        ]
    },
    {
        path: 'user',
        element: <Sub />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
])

export default router;