import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="52551738587-b110babjbsnsqtse9u807kv1n5p6jrek.apps.googleusercontent.com">
    <Provider store={store}>
    <App />
    </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
