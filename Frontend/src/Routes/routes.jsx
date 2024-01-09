import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import Challenges from '../Pages/challenges';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Challenges/>,
    },
]);

export default routes