import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Login from '../Pages/Login/Login';




const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);


export default router;