import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { NewApp, NewApp2, NewApp3, NewApp4, NewApp5, NewApp6 } from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <NewApp />
    <NewApp2 />
    <NewApp3 />
    <NewApp4 />
    <NewApp5 />
    <NewApp6 />
  </React.StrictMode>,
)
