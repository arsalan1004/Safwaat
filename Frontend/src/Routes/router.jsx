import React from "react";
import {createBrowserRouter} from 'react-router-dom';

import FlashCraft, {loader as setsLoader} from "../Components/FlashCraft/FlashCraft";
import SetCreation from "../Components/FlashCraft/FlashCraftMain/SetCreation/SetCreation";
import FlashCardSet, {loader as cardsLoader} from "../Components/FlashCraft/FlashCraftMain/FlashCardSet/FlashCardSet";
import Home,{loader as HomeLoader} from "../Components/Home/Home";
import Login from "../Components/Login_Signup/login";
import Signup from "../Components/Login_Signup/signup";
import LearningUnit from "../Components/learningUnit/LearningUnit";
import Result from "../Components/learningUnit/result/Result";
import FriendshipHub, {loader as friendshiphubLoader} from "../Components/FriendshipHub/FriendshipHub";
import Insights,{loader as InsightsLoader} from "../Components/FriendshipHub/Insights/Insights";
import Profile from "../Components/Profile/Profile";
import Leader from "../Components/LeaderBoard/leaderboad";


import Temp from "../Components/ChatSpace/temp";
import PrivateChat from "../Components/ChatSpace/PrivateChat";
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
                path: 'learningUnit/:id',
                children: [
                  {
                    path: 'slides/:slideId',
                    element: <LearningUnit />
                  },
                  {
                    path: 'result',
                    element: <Result />
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
                
            },
            {
              path: 'Chat',
              children: [
                {
                  path: 'PrivateChat',
                  //element: <PrivateChat />
                  element: <Temp />
                }
              ]
            },
            {
                path:'Leaderboard',
                element: <Leader />
            }
        ]
     }
]);


export default router;