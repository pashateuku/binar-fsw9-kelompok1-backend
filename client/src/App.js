import React from "react";
//IMPORT GLOBAL STYLING
import './App.css';
//IMPORT REACT ROUTER DOM
import { BrowserRouter } from "react-router-dom";
//IMPORT COMPONENTS
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HeroLandingPage from "./Components/HeroLandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <HeroLandingPage/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
