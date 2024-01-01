import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'; 

import './App.css'
import router from './Routes/router';

function App() {

  return (
    <>
      <RouterProvider  router={router} />
    </>
  )
}

export default App
