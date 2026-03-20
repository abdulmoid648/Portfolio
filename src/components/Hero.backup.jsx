import React from 'react';
import { motion } from 'framer-motion';
import Scene3D from './Scene3D';

const Hero = () => {
  const terminalLines = [
    "> sudo init portfolio --theme developer",
    "Initializing neural interface... [OK]",
    "Loading 3D visualization core... [OK]",
    "Establishing secure connection to Abdul Moied...",
    "System Ready."
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container full-width">
        <div className="terminal-wrapper">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-title">bash — portfolio — 80x24</div>
          </div>
          <div className="terminal-body">
            {terminalLines.map((line, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.4, duration: 0.2 }}
                className="terminal-line"
              >
                {line}
              </motion.div>
            ))}
            <motion.div 
              className="terminal-cursor"
              animate={{ opacity: [0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          </div>
        </div>

        <div className="hero-content-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="hero-text-center"
          >
            <h1 className="hero-display-title">
              ABDUL MOIED <span className="glow-text">FAROOQ</span>
            </h1>
            <p className="hero-tagline monospace">
              FULL-STACK DEVELOPER // CREATIVE ENGINEER
            </p>
          </motion.div>
          
          <div className="hero-scene-wrapper">
            <Scene3D />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
