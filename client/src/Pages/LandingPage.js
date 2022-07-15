import React from "react";
//IMPORT GLOBAL STYLING
import '../Assets/css/LandingPage.css';
//IMPORT COMPONENTS
import Navbar from "../Components/Global/Navbar";
import Footer from "../Components/Global/Footer";
import HeroLandingPage from "../Components/LandingPage/HeroLandingPage";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroLandingPage />
      <Footer />
    </>
  );
}

export default LandingPage;
