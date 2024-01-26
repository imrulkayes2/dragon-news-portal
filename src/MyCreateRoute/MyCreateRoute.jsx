import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayOut/MainLayout";
import Home from "../Home/Home";
import About from "../Components/About/About";
import Career from "../Components/Career/Career";

const MyCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            }
        ]
    }
])

export default MyCreateRoute;