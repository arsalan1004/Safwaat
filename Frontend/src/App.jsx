import viteLogo from '/vite.svg'
import routes from './Routes/routes'
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
