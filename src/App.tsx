import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-zinc-950 text-white">
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Interests />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
