import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import PrivetRoute from "./PrivetRoute";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import ToyModal from "../Pages/AllToys/ToyModal";
import UpdateToy from "../Pages/MyToys/UpdateToy";

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
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'add-toy',
                element: <PrivetRoute><AddToys /></PrivetRoute>
            },
            {
                path: 'all-toys',
                element: <PrivetRoute><AllToys /></PrivetRoute>
            },
            {
                path: 'my-toys',
                element: <PrivetRoute><MyToys /></PrivetRoute>
            },
            {
                path: 'modal/:id',
                element: <ToyModal />,
                loader: ({params}) => fetch(`http://localhost:5000/getToys/${params.id}`)
            },
            {
                path: 'update/:id',
                element: <UpdateToy />,
                loader: ({params}) => fetch(`http://localhost:5000/getToys/${params.id}`)
            }
        ]
    }
])

export default router;