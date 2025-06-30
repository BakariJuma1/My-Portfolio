import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Project from "./sections/Project";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      
      {/* <main className="p-8 text-center text-gray-700">
        <h2 className="text-2xl font-semibold">Welcome to My Portfolio</h2>
        <p className="mt-2">Let's build something awesome.</p>
      </main> */}
    </div>
  );
}

export default App;
