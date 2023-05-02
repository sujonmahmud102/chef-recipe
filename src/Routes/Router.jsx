import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import ErrorPage from '../Pages/Shared/ErrorPage';
import ChefRecipe from '../Pages/ChefRecipe/ChefRecipe';
import RecipeDetails from '../Pages/ChefRecipe/RecipeDetails';
import Blog from '../Pages/Blog/Blog';




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
                element: <ChefRecipe></ChefRecipe>,
                loader: ({ params }) => fetch('http://localhost:5000/chef')
            },
            {
                path: '/recepedetails',
                element: <RecipeDetails></RecipeDetails>
            }
        ]
    },
]);


export default router;