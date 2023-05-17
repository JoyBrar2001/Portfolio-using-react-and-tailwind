import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import Artwork from "./components/Artwork";
import Fanvids from "./components/Fanvids";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Overview />
      <Projects />
      <Artwork />
      <Fanvids />
    </div>
  );
}

export default App;
