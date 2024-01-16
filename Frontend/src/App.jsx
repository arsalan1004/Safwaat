import './App.css'
import router from './Routes/router';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <ToastContainer containerId='main'/>
      <RouterProvider  router={router} />
    </>
  )
}

export default App
