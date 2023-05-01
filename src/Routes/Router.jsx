import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";




const router = createBrowserRouter([
    {
        path: "/",
        element: <div><button className="btn">Button</button> </div>,
    },
]);


export default router;