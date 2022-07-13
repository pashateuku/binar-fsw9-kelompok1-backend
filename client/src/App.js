import React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
    </>
  );
}

export default App;
