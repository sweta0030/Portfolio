import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Background from './components/Background.jsx';
import Footer from './components/Footer.jsx';
import MouseGlow from './components/MouseGlow.jsx';
import Navbar from './components/Navbar.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import About from './sections/About.jsx';
import Achievements from './sections/Achievements.jsx';
import Contact from './sections/Contact.jsx';
import Hero from './sections/Hero.jsx';
import Projects from './sections/Projects.jsx';
import Skills from './sections/Skills.jsx';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="site-shell min-h-screen overflow-x-hidden text-ink antialiased">
      <Background />
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onSelectProject={setSelectedProject} />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
