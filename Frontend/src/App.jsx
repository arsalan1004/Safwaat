import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'; 

import './App.css'
import router from './Routes/router';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <ToastContainer containerId='main'/>
      <RouterProvider  router={router} />
    </>
  )
}

export default App
