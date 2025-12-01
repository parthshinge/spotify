import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App'
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { PlayerProvider } from "./context/PlayerContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <PlayerProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </PlayerProvider>
)
