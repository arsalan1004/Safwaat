import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import LearningUnit from './Components/learningUnit/LearningUnit'
import Result from './Components/learningUnit/Result'
import ExitLessonModal from './Components/learningUnit/ExitLessonModal'
import AudioSlide from './Components/learningUnit/slideMiddle/audio/AudioSlide'
import TheorySlideComparative from './Components/learningUnit/slideMiddle/theory/TheorySlideComparative'
import ModelWindow from './Components/learningUnit/slideMiddle/model/ModelWindow'
import Drag from './Components/learningUnit/slideMiddle/dragAndDrop/drag'
import Match from './Components/learningUnit/slideMiddle/matching/match'
const router = createBrowserRouter([
  { path: '/:lid', element: <LearningUnit /> },
  { path: '/result', element: <Result /> },
  { path: '/match', element: <Match />}
  // { path: '/', element: <ModelWindow /> }
])

function App() {
  
  return (
    <>
      <RouterProvider router={router} />
      {/* <p>Hello</p> */}
    </>
  )
}

export default App
