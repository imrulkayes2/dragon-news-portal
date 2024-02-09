import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayOut/MainLayout";
import Home from "../Home/Home";
import About from "../Components/About/About";
import Career from "../Components/Career/Career";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import News from "../Components/News/News";
import PrivetRoute from "../Components/PrivetRoute/PrivetRoute";

const MyCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivetRoute><News></News></PrivetRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default MyCreateRoute;