import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="footer container" style={{ padding: '4rem 0', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
        <p style={{ color: 'var(--text-secondary)' }}>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="social-links" style={{ display: 'flex', gap: '1.5rem' }}>
          <Github className="icon" style={{ cursor: 'pointer', color: 'var(--text-secondary)', transition: 'color 0.2s' }} />
          <Linkedin className="icon" style={{ cursor: 'pointer', color: 'var(--text-secondary)', transition: 'color 0.2s' }} />
          <Mail className="icon" style={{ cursor: 'pointer', color: 'var(--text-secondary)', transition: 'color 0.2s' }} />
        </div>
      </footer>
    </div>
  );
}

export default App;
