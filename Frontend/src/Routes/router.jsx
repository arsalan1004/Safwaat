import React from "react";
import {createBrowserRouter} from 'react-router-dom';

import FlashCraft, {loader as setsLoader} from "../Components/FlashCraft/FlashCraft";
import SetCreation from "../Components/FlashCraft/FlashCraftMain/SetCreation/SetCreation";
import FlashCardSet, {loader as cardsLoader} from "../Components/FlashCraft/FlashCraftMain/FlashCardSet/FlashCardSet";
import Home,{loader as HomeLoader} from "../Components/Home/Home";
import Login from "../Components/Login_Signup/login";
import Signup from "../Components/Login_Signup/signup";
import FriendshipHub, {loader as friendshiphubLoader} from "../Components/FriendshipHub/FriendshipHub";
import Insights,{loader as InsightsLoader} from "../Components/FriendshipHub/Insights/Insights";
import Profile from "../Components/Profile/Profile";



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
                path:'profile',
                element: <Profile />
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
                        element: <FriendshipHub />,
                        loader: friendshiphubLoader
                    },
                    {
                        path: 'Insights',
                        element: <Insights />,
                        loader: InsightsLoader
                    }
                ]
                
            }
        ]
    }
]);


export default router;