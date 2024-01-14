import React from "react";
import {createBrowserRouter} from 'react-router-dom';


import FlashCraft, {loader as setsLoader} from "../Components/FlashCraft/FlashCraft";
import SetCreation from "../Components/FlashCraft/FlashCraftMain/SetCreation/SetCreation";
import FlashCardSet, {loader as cardsLoader} from "../Components/FlashCraft/FlashCraftMain/FlashCardSet/FlashCardSet";
import Home from "../Components/Home/Home";
import PrivateChat from "../Components/ChatSpace/PrivateChat";

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true, 
                element: <Home />,
                
            },
            {
                path: 'FlashCraft',
                children: [
                    {
                        index: true,
                        element: <FlashCraft />,
                        loader: setsLoader 
                    },
                    {
                        path: 'SetCreation',
                        element: <SetCreation />
                    },
                    {
                        path: ':id',
                        element: <FlashCardSet />,
                        loader: cardsLoader
                    }
                ]
            },
            {
                path: 'Chat',
                children: [
                  {
                    path: 'PrivateChat',
                    element: <PrivateChat />
                  }
                ]
            }
        ]
    }
]);


export default router;