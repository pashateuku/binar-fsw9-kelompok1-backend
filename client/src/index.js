import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//IMPORT GLOBAL CSS
import "./index.css";
//IMPORT PAGES
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import HomePage from "./Pages/HomePage";
import Listgame from "./Pages/ListPage";
import Leaderboard from "./Pages/Leaderboard";
//IMPORT BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/list-game" element={<Listgame />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  </BrowserRouter>
);
