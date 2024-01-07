import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LearningUnit from './Components/learningUnit/LearningUnit'
import Result from './Components/learningUnit/Result'
import './App.css'

const router = createBrowserRouter([
  { path: '/:lid', element: <LearningUnit /> },
  { path: '/result', element: <Result /> }
])

function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
