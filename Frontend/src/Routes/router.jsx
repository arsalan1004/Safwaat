import React from "react";
import {createBrowserRouter} from 'react-router-dom';

import FlashCraft, {loader as setsLoader} from "../Components/FlashCraft/FlashCraft";
import SetCreation from "../Components/FlashCraft/FlashCraftMain/SetCreation/SetCreation";
import FlashCardSet, {loader as cardsLoader} from "../Components/FlashCraft/FlashCraftMain/FlashCardSet/FlashCardSet";
import Home,{loader as HomeLoader} from "../Components/Home/Home";
import Login from "../Components/Login_Signup/login";
import Signup from "../Components/Login_Signup/signup";
import FriendshipHub from "../Components/FriendshipHub/FriendshipHub";
import Insights from "../Components/FriendshipHub/Insights/Insights";



const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true, 
                element: <Home />,
                loader: HomeLoader
                
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
            },
            {
                path: 'FriendshipHub',
                children: [
                    {
                        index: true,
                        element: <FriendshipHub />
                    },
                    {
                        path: 'Insights',
                        element: <Insights />
                    }
                ]
                
            }
        ]
    }
]);


export default router;