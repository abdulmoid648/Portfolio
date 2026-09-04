import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Maximize2, Minimize2 } from 'lucide-react';

const Window = ({ 
  id, 
  title, 
  children, 
  onClose, 
  onMinimize, 
  isActive, 
  onFocus, 
  initialPos = { x: 50, y: 50 },
  width = 600,
  height = 400
}) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const [isMaximized, setIsMaximized] = useState(isMobile);

  // Auto-maximize on mobile resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setIsMaximized(true);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClose = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onClose();
  };

  const handleMinimize = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onMinimize();
  };

  const toggleMaximize = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (window.innerWidth > 768) setIsMaximized(!isMaximized);
  };

  const fullMode = isMaximized || isMobile;

  return (
    <motion.div
      drag={!fullMode}
      dragMomentum={false}
      dragListener={!fullMode}
      initial={fullMode 
        ? { opacity: 0, x: 0, y: 0, scale: 1 }
        : { scale: 0.9, opacity: 0, x: initialPos.x, y: initialPos.y }
      }
      animate={{ 
        scale: 1, 
        opacity: 1,
        width: fullMode ? '100vw' : width,
        height: fullMode ? '100vh' : height,
        x: fullMode ? 0 : undefined,
        y: fullMode ? 0 : undefined
      }}
      exit={{ scale: 0.9, opacity: 0 }}
      onPointerDown={onFocus}
      className={`window-container ${isActive ? 'active' : ''} ${fullMode ? 'window-fullscreen' : ''}`}
      style={{ 
        zIndex: isActive ? 100 : 10,
        position: fullMode ? 'fixed' : 'absolute',
        top: fullMode ? 0 : undefined,
        left: fullMode ? 0 : undefined,
        borderRadius: fullMode ? 0 : undefined
      }}
    >
      <div className="window-header" onPointerDown={onFocus} onDoubleClick={toggleMaximize}>
        <div className="window-controls">
          <div className="control-dot dot-close" onPointerDown={handleClose} onClick={handleClose}>
            <X size={10} color="#000" />
          </div>
          <div className="control-dot dot-min" onPointerDown={handleMinimize} onClick={handleMinimize}>
            <Minus size={10} color="#000" />
          </div>
          <div className="control-dot dot-max" onPointerDown={toggleMaximize} onClick={toggleMaximize}>
            {isMaximized ? <Minimize2 size={10} color="#000" /> : <Maximize2 size={10} color="#000" />}
          </div>
        </div>
        <span className="window-title">{title}</span>
        <div style={{ width: 60 }} /> {/* Spacer */}
      </div>
      
      <div className="window-content">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;
