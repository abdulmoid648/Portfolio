import React from 'react';
import { motion } from 'framer-motion';
import Scene3D from './Scene3D';

const Hero = () => {
  return (
    <section id="hero" className="hero-section" style={{ minHeight: '60vh', paddingTop: 0 }}>
      <div className="hero-container" style={{ alignItems: 'flex-start' }}>
        {/* Left Side */}
        <motion.div
          className="hero-left term-panel"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: 1, marginTop: '2rem' }}
        >
          <div className="term-header">SYS_INFO</div>
          <div className="term-text" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ color: 'var(--term-blue)' }}>{'>'} INITIALIZING ROOT... OK</span>
            <span style={{ color: 'var(--term-blue)' }}>{'>'} AUTHENTICATING USER...</span>
            <span style={{ color: 'var(--term-green)', fontWeight: 'bold' }}>[ AUTH: SUCCESS ]</span>
            <br/>
            <span>PROFILE_NAME: <span style={{ color: 'white' }}>ABDUL MOIED FAROOQ</span></span>
            <span>ACTIVE_ROLE: <span style={{ color: 'white' }}>FULL STACK ARCHITECT</span></span>
            <span>STATUS: <span style={{ color: 'var(--term-green)' }}>ONLINE</span></span>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <button className="term-btn">{'> EXECUTE_STARTUP'}</button>
          </div>
        </motion.div>

        {/* Center - 3D Scene */}
        <div className="hero-center" style={{ flex: 1.5 }}>
          <Scene3D />
        </div>
      </div>
    </section>
  );
};

export default Hero;
