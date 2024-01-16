import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from './Store/store.js'
import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="52551738587-b110babjbsnsqtse9u807kv1n5p6jrek.apps.googleusercontent.com">
    <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
