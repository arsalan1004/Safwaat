import React from "react";
import {createBrowserRouter} from 'react-router-dom';


import FlashCraft, {loader as setsLoader} from "../Components/FlashCraft/FlashCraft";
import SetCreation from "../Components/FlashCraft/FlashCraftMain/SetCreation/SetCreation";
import FlashCardSet from "../Components/FlashCraft/FlashCraftMain/FlashCardSet/FlashCardSet";


const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true, 
                element: <FlashCraft />,
                // loader: setsLoader
            },
            {
                path: 'SetCreation',
                element: <SetCreation />
            },
            {
                path: ':id',
                element: <FlashCardSet />
            }
        ]
    }
]);


export default router;