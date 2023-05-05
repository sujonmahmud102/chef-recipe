import React from 'react';
import { createBrowserRouter, } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import ErrorPage from '../Pages/Shared/ErrorPage';
import ChefRecipe from '../Pages/ChefRecipe/ChefRecipe';
import Blog from '../Pages/Blog/Blog';
import PrivateRoute from './PrivateRoute';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/chefrecipe/:id',
                element: <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
                loader: ({ params }) => fetch('https://chef-recipe-a10-server-sujonmahmud102.vercel.app/chef')
            }
        ]
    },
]);


export default router;