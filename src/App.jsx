import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Lock } from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Auth from './components/Auth';
import Window from './components/Window';
import Taskbar from './components/Taskbar';
import Tour from './components/Tour';
import BentoDashboard from './components/BentoDashboard';

function App() {
  const [openWindows, setOpenWindows] = useState([]);
  const [focusedWindow, setFocusedWindow] = useState(null);
  const [windowSize, setWindowSize] = useState({ w: 1000, h: 800 });
  const [isAdmin, setIsAdmin] = useState(!!localStorage.getItem('adminToken'));

  useEffect(() => {
    setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    
    // Listen for custom event from Auth component when login changes
    const handleAuthChange = () => setIsAdmin(!!localStorage.getItem('adminToken'));
    window.addEventListener('admin-auth-changed', handleAuthChange);
    return () => window.removeEventListener('admin-auth-changed', handleAuthChange);
  }, []);

  const windows = {
    hero: { title: 'sys_info.exe', component: Hero, width: 800, height: 600 },
    projects: { title: 'deployments.exe', component: Projects, width: 900, height: 600 },
    stack: { title: 'stack_info.exe', component: TechStack, width: 850, height: 650 },
    contact: { title: 'connect.exe', component: Contact, width: 700, height: 500 },
    auth: { title: 'admin_access.exe', component: Auth, width: 600, height: 650 }
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
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', background: '#050505' }}>
      
      {/* Bento Dashboard */}
      <BentoDashboard onOpenWindow={handleOpenWindow} />

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
