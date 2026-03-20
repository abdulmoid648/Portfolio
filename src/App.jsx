import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Monitor, Code, Terminal, Send } from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Window from './components/Window';
import Taskbar from './components/Taskbar';
import Tour from './components/Tour';

function App() {
  const [openWindows, setOpenWindows] = useState([]);
  const [focusedWindow, setFocusedWindow] = useState(null);
  const [windowSize, setWindowSize] = useState({ w: 1000, h: 800 });

  useEffect(() => {
    setWindowSize({ w: window.innerWidth, h: window.innerHeight });
  }, []);

  const windows = {
    hero: { title: 'sys_info.exe', component: Hero, width: 800, height: 600 },
    projects: { title: 'deployments.exe', component: Projects, width: 900, height: 600 },
    stack: { title: 'stack_info.exe', component: TechStack, width: 850, height: 650 },
    contact: { title: 'connect.exe', component: Contact, width: 700, height: 500 }
  };

  const handleOpenWindow = (id) => {
    if (!openWindows.includes(id)) {
      setOpenWindows([...openWindows, id]);
    }
    setFocusedWindow(id);
  };

  const handleCloseWindow = (id) => {
    setOpenWindows(openWindows.filter(w => w !== id));
    if (focusedWindow === id) {
      setFocusedWindow(openWindows[openWindows.length - 2] || null);
    }
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      
      {/* Global Header */}
      <h1 style={{ 
        color: 'var(--term-blue)', 
        fontFamily: 'var(--term-font)', 
        fontSize: '2rem', 
        fontWeight: 800, 
        letterSpacing: '0.1em',
        textShadow: 'var(--term-glow-blue)',
        marginBottom: '2rem',
        zIndex: 1
      }}>
        :: MERN_ENV // ABDUL_MOIED
      </h1>

      {/* Bento Desktop Menu */}
      <div className="bento-grid" style={{ flex: 1, zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridAutoRows: 'minmax(150px, auto)', gap: '1.5rem', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <div 
           className="term-panel desktop-span-6 bento-btn" 
           onClick={() => handleOpenWindow('hero')}
           style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'all 0.2s', margin: 0 }}
        >
           <Monitor size={48} color="var(--term-green)" style={{ marginBottom: '1rem' }} />
           <div className="term-header" style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>SYS_INFO</div>
           <p className="term-text" style={{ fontSize: '0.9rem' }}>Initialize Root & Profile</p>
        </div>

        <div 
           className="term-panel term-panel-blue desktop-span-6 bento-btn" 
           onClick={() => handleOpenWindow('stack')}
           style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'all 0.2s', margin: 0 }}
        >
           <Code size={48} color="var(--term-blue)" style={{ marginBottom: '1rem' }} />
           <div className="term-header" style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>STACK_INFO</div>
           <p className="term-text" style={{ fontSize: '0.9rem' }}>Orbital Engine Visualizer</p>
        </div>

        <div 
           className="term-panel desktop-span-8 bento-btn" 
           onClick={() => handleOpenWindow('projects')}
           style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'all 0.2s', margin: 0 }}
        >
           <Terminal size={48} color="var(--term-green)" style={{ marginBottom: '1rem' }} />
           <div className="term-header" style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>RECENT_DEPLOYMENTS</div>
           <p className="term-text" style={{ fontSize: '0.9rem' }}>Project logs & Environments</p>
        </div>

        <div 
           className="term-panel desktop-span-4 bento-btn" 
           onClick={() => handleOpenWindow('contact')}
           style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center', transition: 'all 0.2s', margin: 0 }}
        >
           <Send size={48} color="var(--term-green)" style={{ marginBottom: '1rem' }} />
           <div className="term-header" style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>CONNECTION_PROTOCOL</div>
           <p className="term-text" style={{ fontSize: '0.9rem' }}>Establish transmission</p>
        </div>
      </div>

      {/* Modals/Windows */}
      <AnimatePresence>
        {openWindows.map((id, index) => {
          const Config = windows[id];
          const Content = Config.component;
          
          let initX = windowSize.w > Config.width ? (windowSize.w - Config.width) / 2 : 20;
          let initY = windowSize.h > Config.height ? (windowSize.h - Config.height) / 2 : 20;

          return (
            <Window
              key={id}
              id={id}
              title={Config.title}
              width={Math.min(Config.width, windowSize.w - 40)}
              height={Math.min(Config.height, windowSize.h - 100)}
              isActive={focusedWindow === id}
              onFocus={() => setFocusedWindow(id)}
              onClose={() => handleCloseWindow(id)}
              onMinimize={() => handleCloseWindow(id)}
              initialPos={{ x: initX + (index * 20), y: initY + (index * 20) }}
            >
              <div className="terminal-window-body" style={{ height: '100%', overflowY: 'auto', background: 'var(--term-bg)', padding: '1rem' }}>
                 {/* This renders the neon styled components exactly as they are now */}
                 <Content />
              </div>
            </Window>
          );
        })}
      </AnimatePresence>
      
      {openWindows.length > 0 && (
         <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 9999 }}>
           <Taskbar 
              activeWindows={openWindows} 
              openWindow={handleOpenWindow}
              focusedWindow={focusedWindow}
           />
         </div>
      )}

      {/* Launch Web Tour */}
      <Tour />
    </div>
  );
}

export default App;
