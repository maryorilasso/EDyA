import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import FirstApp from './FirstApp.jsx' 
import './index.css'

ReactDOM 
.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title= "My First App" />
  </React.StrictMode>,
)
