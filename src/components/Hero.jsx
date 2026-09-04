import React from 'react';
import { motion } from 'framer-motion';

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

            <span>[IDENTITY]: <span style={{ color: 'white' }}>Abdul Moied</span></span>
            <span>[ROLE]: <span style={{ color: 'white' }}>Computer Science Student</span></span>
            <span>[FOCUS]: <span style={{ color: 'white' }}>MERN Stack {"&"} Flutter Development</span></span>
            <span>[LOCATION]: <span style={{ color: 'white' }}>Lahore_PK // Global_Remote</span></span>
            <br />
            <span style={{ color: 'var(--term-dim)', lineHeight: '1.6' }}>
              {"Building high-performance web and mobile solutions while mastering the core principles of Software Engineering."}
            </span>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <button className="term-btn">{'> EXECUTE_STARTUP'}</button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
