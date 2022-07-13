import React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
