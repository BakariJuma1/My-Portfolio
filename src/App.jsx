import React, { useState } from "react";
import Navbar from "./ui/Navbar";
import MobileMenu from "./ui/MobileMenu";
import LoadingScreenAnimation from "./ui/LoadingScreenAnimation";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <LoadingScreenAnimation />
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}

export default App;
