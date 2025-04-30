import React, { useState } from "react";
import Navbar from "./ui/Navbar";
import MobileMenu from "./ui/MobileMenu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="text-3xl font-bold">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}

export default App;
