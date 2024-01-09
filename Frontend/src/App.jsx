import viteLogo from '/vite.svg'
import routes from './Routes/routes'
import './App.css'
import {
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer containerId='main' autoClose={2000}  pauseOnFocusLoss={true}/>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
