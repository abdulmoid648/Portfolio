import React, { useState } from 'react';
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
  const [isMaximized, setIsMaximized] = useState(false);

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
    setIsMaximized(!isMaximized);
  };

  return (
    <motion.div
      drag={!isMaximized}
      dragMomentum={false}
      dragListener={!isMaximized}
      initial={{ scale: 0.9, opacity: 0, x: initialPos.x, y: initialPos.y }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        width: isMaximized ? '100vw' : width,
        height: isMaximized ? 'calc(100vh - 64px)' : height,
        x: isMaximized ? 0 : undefined,
        y: isMaximized ? 0 : undefined
      }}
      exit={{ scale: 0.9, opacity: 0 }}
      onPointerDown={onFocus}
      className={`window-container ${isActive ? 'active' : ''}`}
      style={{ 
        zIndex: isActive ? 100 : 10,
        position: 'absolute'
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
