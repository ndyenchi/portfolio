import { ThemeProvider } from "./contexts/ThemeContext";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/home";
import { Education } from "./components/education";
import { Experience } from "./components/experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";
import { Footer } from "./components/Footer";
import "./styles/index.css";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background relative">
        {/* Global Animated Background */}
        <AnimatedBackground />

        {/* Content with higher z-index */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Home />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
