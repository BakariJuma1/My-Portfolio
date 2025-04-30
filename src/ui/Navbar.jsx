import { useEffect } from "react";
import Logo from "./Logo";
import { IoMdMenu } from "react-icons/io";

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg[rgba(10,1010,0.8)] backdrop-blur-lg px-1 border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-centre font-mono h-16">
          <Logo />
          {/* //make state false and disappear menu */}
          <div
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-2xl absolute right-7 z-40 md:hidden cursor-pointer font-mono "
          >
            <IoMdMenu />
          </div>
          <div className="flex md:flex items-centre space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-300 text-lg hover:text-xl  hover:text-white transition-all"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 text-lg hover:text-xl hover:text-white transition-all"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-300 text-lg hover:text-xl hover:text-white transition-all"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-300 text-lg hover:text-xl hover:text-white transition-all"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
