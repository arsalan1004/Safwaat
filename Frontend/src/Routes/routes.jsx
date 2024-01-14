import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import Challenges from '../Components/Challenges/challenges';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Challenges/>,
    },
]);

export default routes