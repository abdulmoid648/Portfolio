import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="hero-section container">
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-badge"
        >
          <span className="badge-text">Available for new opportunities</span>
        </motion.div>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting Digital <br/> 
          <span className="gradient-text glow">Experiences</span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I am a passionate software engineer specializing in building modern, responsive, and visually stunning web applications with highly interactive user interfaces.
        </motion.p>
        
        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#projects" className="btn btn-primary">
            View My Work
            <span className="btn-glow"></span>
          </a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </motion.div>
      </div>

      <motion.div 
        className="hero-image-wrapper"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {/* Placeholder for dynamic 3D graphic or beautiful image */}
        <div className="abstract-shape shape-1"></div>
        <div className="abstract-shape shape-2"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
