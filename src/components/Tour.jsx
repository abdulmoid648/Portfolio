import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MousePointer2 } from 'lucide-react';

const Tour = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show tour after 1.5 seconds if they haven't explicitly closed it
    const hasSeenTour = localStorage.getItem('hasSeenTourMobile');
    if (!hasSeenTour) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismissTour = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenTourMobile', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%', scale: 0.9 }}
          animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: 20, x: '-50%' }}
          className="term-panel"
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            zIndex: 999999,
            width: 'calc(100vw - 40px)', 
            maxWidth: '350px',
            backgroundColor: 'rgba(3, 7, 18, 0.98)',
            margin: 0,
            padding: '1.25rem',
            border: '1px solid var(--term-blue)',
            boxShadow: 'var(--term-glow-blue)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div className="term-header" style={{ marginBottom: 0, color: 'var(--term-blue)', fontSize: '1rem' }}>
              SYSTEM_TUTORIAL
            </div>
            <button onClick={dismissTour} style={{ background: 'none', border: 'none', color: 'var(--term-dim)', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(14, 165, 233, 0.1)', padding: '0.5rem', borderRadius: '4px' }}>
               <MousePointer2 size={24} color="var(--term-blue)" />
            </div>
            <div className="term-text" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
              Welcome to the Interactive MERN OS!
              <br/><br/>
              <span style={{ color: 'var(--term-green)', fontWeight: 'bold' }}>1. INITIALIZE:</span> Click any system panel (like SYS_INFO) to spawn its window.
              <br/><br/>
              <span style={{ color: 'var(--term-green)', fontWeight: 'bold' }}>2. INTERACT:</span> Drag windows by their header. Use the top-left dots to <span style={{ color: '#ef4444' }}>close</span>, <span style={{ color: '#f59e0b' }}>minimize</span>, or <span style={{ color: '#10b981' }}>maximize</span> them!
            </div>
          </div>
          
          <button className="term-btn-blue term-btn" onClick={dismissTour} style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}>
            {'> ACKNOWLEDGE'}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Tour;
