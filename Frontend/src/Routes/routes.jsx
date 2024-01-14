import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import Leader from '../Components/LeaderBoard/leaderboad';

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Leader/>,
    },
]);

export default routes