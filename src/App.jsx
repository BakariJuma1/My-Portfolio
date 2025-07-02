import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Project from "./sections/Project";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Contact />
      </main>
    </div>
  );
}

export default App;
