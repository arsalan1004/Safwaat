import React from "react";
import {createBrowserRouter} from 'react-router-dom';


import FlashCraft, {loader as setsLoader} from "../Components/FlashCraft/FlashCraft";
import SetCreation from "../Components/FlashCraft/FlashCraftMain/SetCreation/SetCreation";
import FlashCardSet, {loader as cardsLoader} from "../Components/FlashCraft/FlashCraftMain/FlashCardSet/FlashCardSet";
import Home from "../Components/Home/Home";
import Login from "../Components/Login_Signup/login";
import Signup from "../Components/Login_Signup/signup";

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true, 
                element: <Home />,
                
            },

            {
                path:"login",
                element: <Login />,
                
            },

            {
                path:"signup",
                element: <Signup />,
                
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
            }
        ]
    }
]);


export default router;