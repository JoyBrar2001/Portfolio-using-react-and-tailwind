import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Artwork from "./components/Artwork";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <Artwork />
    </div>
  );
}

export default App;
